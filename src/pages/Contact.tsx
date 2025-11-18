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
  // subject/title removed per user request
  const [message, setMessage] = useState('')
  // messages are always broadcasted to the group (no recipient UI)
  // sendAll state removed per user request
  const [sent, setSent] = useState<null | { time: number; recipients: number }>(null)
  const [broadcasts, setBroadcasts] = useState<Array<any>>([])
  const [selectedIds, setSelectedIds] = useState<number[]>(members.map(m => m.id))

  // recipientCount not shown in UI per request

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save broadcast to localStorage as a simple simulation of 'sending to all members'
    try {
      const existing = JSON.parse(localStorage.getItem('broadcasts' ) || '[]')
      // remove expired (older than 7 days)
      const TTL = 7 * 24 * 60 * 60 * 1000
      const now = Date.now()
      const fresh = existing.filter((b: any) => (now - (b.time || 0)) <= TTL)
  // record recipients as array of ids (empty -> all)
  const recipientsArr = selectedIds.length === members.length ? [] : selectedIds.slice()
  const record = { id: Date.now(), from: name || 'Anonymous', message, time: now, recipients: recipientsArr }
      fresh.unshift(record)
      localStorage.setItem('broadcasts', JSON.stringify(fresh))
  setSent({ time: now, recipients: recipientsArr.length === 0 ? members.length : recipientsArr.length })
      setBroadcasts(fresh)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    try {
      const existing = JSON.parse(localStorage.getItem('broadcasts') || '[]')
      // filter out expired broadcasts (older than 7 days)
      const TTL = 7 * 24 * 60 * 60 * 1000
      const now = Date.now()
      const fresh = existing.filter((b: any) => (now - (b.time || 0)) <= TTL)
      // persist cleaned list
      if (fresh.length !== existing.length) localStorage.setItem('broadcasts', JSON.stringify(fresh))
      setBroadcasts(fresh)
    } catch (err) {
      setBroadcasts([])
    }
  }, [])

  const toggleMember = (id: number) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }
  const toggleAll = (on?: boolean) => {
    if (typeof on === 'boolean') {
      setSelectedIds(on ? members.map(m => m.id) : [])
    } else {
      setSelectedIds(prev => prev.length === members.length ? [] : members.map(m => m.id))
    }
  }

  // delete/clear functions removed per user request; messages auto-expire after 7 days

  const copyBroadcast = async (b: any) => {
    try {
      const header = `Dari: ${b.from} — ${new Date(b.time).toLocaleString()}`
      await navigator.clipboard.writeText(`${header}\n\n${b.message}`)
      alert('Pesan disalin ke clipboard.')
    } catch (err) {
      alert('Gagal menyalin pesan.')
    }
  }

  // downloadRecipients removed per user request (no recipients UI)

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message)
      alert('Pesan disalin ke clipboard. Kamu bisa menempelkannya ke email atau DM.')
    } catch (err) {
      alert('Gagal menyalin. Silakan salin manual.')
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedIn>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Kontak <span className="gradient-text inline-block">ESEFTWO</span></h1>
          <p className="text-muted mt-2">Kirim pesan ke seluruh anggota ESEFTWO</p>
        </div>
      </AnimatedIn>

      <AnimatedIn>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-base-100 p-8 rounded-2xl glass-effect">
          <div className="grid grid-cols-1 gap-4">
            {/* Recipient selector: dropdown with checkboxes */}
            <div className="flex flex-col">
              <label className="font-medium mb-2">Penerima</label>
              <details className="relative">
                <summary className="btn btn-outline btn-sm mb-2">{selectedIds.length === members.length ? `Semua anggota (${members.length})` : `${selectedIds.length} terpilih`}</summary>
                <div className="mt-2 p-3 bg-base-100 border rounded-md max-h-56 overflow-auto">
                  <label className="flex items-center gap-2 mb-2">
                    <input type="checkbox" className="checkbox" checked={selectedIds.length === members.length} onChange={(e) => toggleAll(e.target.checked)} />
                    <span className="text-sm">Pilih semua</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {members.map(m => (
                      <label key={m.id} className="flex items-center gap-2 p-1 rounded hover:bg-base-200">
                        <input type="checkbox" className="checkbox" checked={selectedIds.includes(m.id)} onChange={() => toggleMember(m.id)} />
                        <span className="text-sm">{m.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </details>
            </div>
            <label className="flex flex-col">
              <span className="font-medium mb-2">Nama (pengirim)</span>
              <input className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama kamu" />
            </label>

            {/* title/subject removed */}

            <label className="flex flex-col">
              <span className="font-medium mb-2">Pesan</span>
              <textarea className="textarea textarea-bordered h-40" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tulis pesanmu di sini" required />
            </label>

            

            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="btn btn-primary">Kirim</button>
              <div className="flex gap-3 items-center">
                <button type="button" onClick={copyMessage} className="btn btn-ghost">Salin pesan</button>
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

      {/* Recipient preview removed per user request */}

      <AnimatedIn>
        <section className="max-w-4xl mx-auto mt-8">
          <div className="mb-3">
            <h3 className="text-lg font-semibold">Pesan Terkirim</h3>
            <div className="text-sm text-muted">Pesan akan otomatis dihapus setelah 7 hari.</div>
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
                      <div className="text-sm text-muted mt-1">Untuk: {
                        Array.isArray(b.recipients)
                          ? (b.recipients.length === 0
                              ? `Semua anggota (${members.length})`
                              : (() => {
                                  const names = b.recipients.map((id: number) => {
                                    const m = members.find(x => x.id === id)
                                    return m ? m.name : `#${id}`
                                  })
                                  const MAX_SHOW = 6
                                  if (names.length <= MAX_SHOW) return names.join(', ')
                                  const first = names.slice(0, MAX_SHOW).join(', ')
                                  return `${first} +${names.length - MAX_SHOW} lainnya`
                                })()
                            )
                          : (typeof b.recipients === 'number' ? `${b.recipients} anggota` : `Semua anggota (${members.length})`)
                      }</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => copyBroadcast(b)} className="btn btn-ghost btn-sm">Salin</button>
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
