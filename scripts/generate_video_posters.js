#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

const galleryDir = path.join(process.cwd(), 'public', 'gallery')
const outDir = path.join(galleryDir, 'posters')
const videoExt = ['.mp4', '.webm', '.mov', '.mkv']

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true })
}

function ffmpegAvailable() {
  try {
    const res = spawnSync('ffmpeg', ['-version'], { stdio: 'ignore' })
    return res.status === 0 || res.status === null
  } catch (e) {
    return false
  }
}

if (!fs.existsSync(galleryDir)) {
  console.error('public/gallery not found — please create and add video files first.')
  process.exit(1)
}

if (!ffmpegAvailable()) {
  console.error('ffmpeg not found in PATH. Install ffmpeg to generate posters: https://ffmpeg.org/')
  process.exit(1)
}

ensureDir(outDir)

const files = fs.readdirSync(galleryDir)
const videos = files.filter(f => videoExt.includes(path.extname(f).toLowerCase()))
if (videos.length === 0) {
  console.log('No video files found in public/gallery')
  process.exit(0)
}

console.log(`Found ${videos.length} video(s). Generating posters in ${path.relative(process.cwd(), outDir)}...`)

videos.forEach((v) => {
  const input = path.join(galleryDir, v)
  const name = path.parse(v).name
  const out = path.join(outDir, `${name}.jpg`)

  // extract frame at 1 second; adjust -ss if needed
  const args = ['-y', '-i', input, '-ss', '00:00:01.000', '-vframes', '1', out]
  console.log('> ffmpeg', args.join(' '))
  const res = spawnSync('ffmpeg', args, { stdio: 'inherit' })
  if (res.status !== 0) {
    console.error(`Failed to generate poster for ${v}`)
  }
})

console.log('Done.')
