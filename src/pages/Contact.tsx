import React, { useEffect, useState } from 'react'
import AnimatedIn from '../components/AnimatedIn'

const members = [
  // minimal recipient info (name + instagram) copied from Members page
  { id: 1, name: 'AISHA AMELIA SAKHIY', handle: 'aishameel' },
  { id: 2, name: 'ANINDYA PUTRI', handle: 'arun4ru' },
  { id: 3, name: 'APRILIA NUR AINY', handle: 'aprlnrainisja' },
  { id: 4, name: 'ARNETA PUTRI HAMID', handle: '_nnett4a' },
  { id: 5, name: 'ARYA RIDHO SAPUTRA', handle: 'alyakkk19_' },
  { id: 6, name: 'ARYA SHAFA AKBAR', handle: 'aryahags' },
  { id: 7, name: 'BEKTI RAHAYU', handle: 'v_ayu16' },
  { id: 8, name: 'DAFFA SETYA HANDIKA', handle: 'daffaastya' },
  { id: 9, name: 'DEBYSA NURUL USTAROH', handle: 'prettyiiesth_' },
  { id: 10, name: 'DIKA NURHIDAYAH', handle: '_dknrhdyh' },
  { id: 11, name: "ERSAF SYIRAZI ARIFIN", handle: '3rsapp' },
  { id: 12, name: 'FADLAN KAUTSAR ALBUKHARI', handle: 'fdlnktsrrr_' },
  { id: 13, name: 'FATIKA NUR FAHRANI', handle: 'tikaanff_' },
  { id: 14, name: 'FIKO ANGGARA PUTRA', handle: 'bro_fkk' },
  { id: 15, name: 'HAFIZHA RAISYA KAMILA', handle: 'overjoyedecak_' },
  { id: 16, name: 'KHARISMA INKA PUTRI', handle: 'iam.rsmaa_' },
  { id: 17, name: 'KIDUNG MABUMI PURWANING DUMADI', handle: 'bumisolar' },
  { id: 18, name: 'LAILY ARIEKA NURASYIFA', handle: 'onlylailyasf' },
  { id: 19, name: 'LILIS GAYUH SAPUTRI', handle: '_gystt' },
  { id: 20, name: 'MUFILIH RAFILESEPPA', handle: '_muflih_rafileseppa' },
  { id: 21, name: "MUHAMMAD 'IZZUDDIN ZAKI", handle: 'imjackkkkkkkkk' },
  { id: 22, name: 'MUHAMMAD ATSAL THARIQ RAMI', handle: 'atsalllthrqq_' },
  { id: 23, name: 'MUHAMMAD UBAIDILLAH MAULANA L', handle: 'ubaiimlzrd' },
  { id: 24, name: 'NABILA CAHYA NUGROHO', handle: 'bilch_' },
  { id: 25, name: 'NABILA SAFINATUNNAJAH', handle: 'bil_sfnx' },
  { id: 26, name: 'NADHIF AMYRTA FAHMA', handle: 'nadhif.amyrta.fahma' },
  { id: 27, name: 'NAILA SETYANINGTYAS', handle: 'nylazaaa' },
  { id: 28, name: 'NEYSA VASHTI RAMADANI', handle: 'neiyvst' },
  { id: 29, name: 'NINA EVELYN', handle: 'orlle0.pie' },
  { id: 30, name: 'PRANANDA ARKAN RAMADHAN', handle: 'arkanr_rr' },
  { id: 31, name: 'RINA AULIA HUSNA', handle: 'rrinaauliaa' },
  { id: 32, name: 'THOMAS ADHI PAMUNGKAS', handle: 'tthomaaasss' },
  { id: 33, name: 'TSANIA HASNA HANIFA', handle: 'hsnhanifa__' },
  { id: 34, name: 'UBAIDILLAH ATA AUFA', handle: 'atalaginih19_' },
]

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sendAll, setSendAll] = useState(true)
  const [sent, setSent] = useState<null | { time: number; recipients: number }>(null)
  const [broadcasts, setBroadcasts] = useState<Array<any>>([])

  const recipientCount = sendAll ? members.length : 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save broadcast to localStorage as a simple simulation of 'sending to all members'
    try {
      const existing = JSON.parse(localStorage.getItem('broadcasts' ) || '[]')
      const record = { id: Date.now(), from: name || 'Anonymous', subject, message, time: Date.now(), recipients: sendAll ? members.length : 0 }
      existing.unshift(record)
      localStorage.setItem('broadcasts', JSON.stringify(existing))
      setSent({ time: Date.now(), recipients: record.recipients })
      setBroadcasts(existing)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    try {
      const existing = JSON.parse(localStorage.getItem('broadcasts') || '[]')
      setBroadcasts(existing)
    } catch (err) {
      setBroadcasts([])
    }
  }, [])

  const deleteBroadcast = (id: number) => {
    try {
      const filtered = broadcasts.filter((b: any) => b.id !== id)
      localStorage.setItem('broadcasts', JSON.stringify(filtered))
      setBroadcasts(filtered)
    } catch (err) {
      console.error(err)
    }
  }

  const clearAllBroadcasts = () => {
    if (!confirm('Hapus semua pesan terkirim?')) return
    try {
      localStorage.removeItem('broadcasts')
      setBroadcasts([])
    } catch (err) {
      console.error(err)
    }
  }

  const copyBroadcast = async (b: any) => {
    try {
      await navigator.clipboard.writeText(`Subject: ${b.subject}\nFrom: ${b.from}\n\n${b.message}`)
      alert('Pesan disalin ke clipboard.')
    } catch (err) {
      alert('Gagal menyalin pesan.')
    }
  }

  const downloadRecipients = () => {
    const csv = members.map(m => `"${m.name}","@${m.handle}"`).join('\n')
    const blob = new Blob([`name,handle\n${csv}`], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'recipients.csv'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(`Subject: ${subject}\n\n${message}`)
      alert('Pesan disalin ke clipboard. Kamu bisa menempelkannya ke email atau DM.')
    } catch (err) {
      alert('Gagal menyalin. Silakan salin manual.')
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedIn>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Kontak <span className="gradient-text">ESEFTWO</span></h1>
          <p className="text-muted mt-2">Kirim pesan ke seluruh anggota ESEFTWO. Saat ini fungsi kirim disimulasikan (no backend).</p>
        </div>
      </AnimatedIn>

      <AnimatedIn>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-base-100 p-8 rounded-2xl glass-effect">
          <div className="grid grid-cols-1 gap-4">
            <label className="flex flex-col">
              <span className="font-medium mb-2">Nama (pengirim)</span>
              <input className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama kamu" />
            </label>

            <label className="flex flex-col">
              <span className="font-medium mb-2">Subjek</span>
              <input className="input input-bordered" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Judul pesan" required />
            </label>

            <label className="flex flex-col">
              <span className="font-medium mb-2">Pesan</span>
              <textarea className="textarea textarea-bordered h-40" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tulis pesanmu di sini" required />
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" checked={sendAll} onChange={(e) => setSendAll(e.target.checked)} className="checkbox" />
              <span>Kirim ke semua anggota ({members.length})</span>
            </label>

            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="btn btn-primary">Kirim</button>
              <div className="flex gap-3 items-center">
                <button type="button" onClick={copyMessage} className="btn btn-ghost">Salin pesan</button>
                <button type="button" onClick={downloadRecipients} className="btn btn-ghost">Unduh daftar penerima</button>
              </div>
            </div>

            {sent && (
              <div className="p-4 bg-success/10 border border-success rounded-lg text-success">
                Pesan tersimpan dan akan dikirim ke {sent.recipients} anggota (disimulasikan). Waktu: {new Date(sent.time).toLocaleString()}.
              </div>
            )}
          </div>
        </form>
      </AnimatedIn>

      <AnimatedIn>
        <section className="max-w-4xl mx-auto mt-8">
          <h3 className="text-lg font-semibold mb-3">Preview penerima</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {members.map(m => (
              <div key={m.id} className="p-3 rounded-lg bg-base-200 shadow-sm">
                <div className="font-medium">{m.name}</div>
                <div className="text-sm text-muted">@{m.handle}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedIn>

      <AnimatedIn>
        <section className="max-w-4xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Pesan Terkirim</h3>
            <div className="flex items-center gap-2">
              <button onClick={() => { window.location.reload() }} className="btn btn-ghost btn-sm">Muat ulang</button>
              <button onClick={clearAllBroadcasts} className="btn btn-ghost btn-sm text-red-500">Hapus semua</button>
            </div>
          </div>

          {broadcasts.length === 0 ? (
            <div className="p-4 rounded-lg bg-base-200 text-muted">Belum ada pesan terkirim.</div>
          ) : (
            <div className="space-y-3">
              {broadcasts.map((b: any) => (
                <div key={b.id} className="p-4 rounded-lg bg-base-100 border shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold">{b.subject}</div>
                      <div className="text-sm text-muted">Dari: {b.from} — {new Date(b.time).toLocaleString()}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => copyBroadcast(b)} className="btn btn-ghost btn-sm">Salin</button>
                      <button onClick={() => deleteBroadcast(b.id)} className="btn btn-ghost btn-sm text-red-500">Hapus</button>
                    </div>
                  </div>
                  <div className="mt-3 whitespace-pre-wrap text-sm">{b.message}</div>
                </div>
              ))}
            </div>
          )}
        </section>
      </AnimatedIn>
    </div>
  )
}

export default Contact
