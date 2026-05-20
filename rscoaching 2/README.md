# RS Coaching — Istruzioni Setup Completo

## Struttura progetto
```
rscoaching/
├── index.html           ← redirect automatico alla dashboard
├── netlify.toml         ← config routing Netlify
├── athlete/
│   └── index.html       ← App atleta (link personale)
├── coach/
│   └── index.html       ← Dashboard preparatore
└── README.md
```

---

## ✅ STEP 1 — Attiva Realtime Database su Firebase

1. Vai su https://console.firebase.google.com
2. Apri il progetto **rscoaching-a6c61**
3. Menu sinistro → **Realtime Database** → **Crea database**
4. Scegli location: **europe-west1**
5. Scegli **modalità test** → Avanti → Fine

⚠️ Senza questo step l'app non funziona!

---

## ✅ STEP 2 — Regole Database

Dopo aver creato il database:
1. Clicca tab **Regole**
2. Sostituisci tutto con:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

3. Clicca **Pubblica**

---

## ✅ STEP 3 — Carica su GitHub

1. Vai su https://github.com → **New repository**
2. Nome: `rscoaching` → Public → **Create repository**
3. Clicca **"uploading an existing file"**
4. Trascina TUTTI i file di questa cartella (incluse le sottocartelle)
5. Clicca **Commit changes**

---

## ✅ STEP 4 — Pubblica su Netlify

1. Vai su https://netlify.com → **Add new site** → **Import from Git** → GitHub
2. Seleziona repo `rscoaching`
3. Build command: *(lascia vuoto)*
4. Publish directory: *(lascia vuoto o metti `/`)*
5. Clicca **Deploy site**
6. Dopo il deploy → **Site settings** → **Change site name** → scrivi `rscoaching`

Il sito sarà live su: **https://rscoaching.netlify.app**

---

## 🚀 Come usare il sistema

### Dashboard preparatore
👉 https://rscoaching.netlify.app/coach/
- PIN: `raoul2024`
- Clicca **+ Aggiungi atleta** → inserisci nome, ruolo, squadra
- Clicca **Crea atleta** → appare il link personale → copialo e mandalo via WhatsApp

### App atleta
👉 https://rscoaching.netlify.app/athlete/?id=IDATLETA
- L'atleta apre dal telefono
- Seleziona il giorno → inserisce RPE, DOMS, Sonno, pesi, note → Salva
- Tu vedi tutto in tempo reale nella dashboard

---

## 🔒 Cambia il PIN coach

Nel file `coach/index.html` cerca:
```javascript
const COACH_PIN = "raoul2024";
```
Cambialo con il PIN che vuoi, poi ricarica il file su GitHub.

---

## ⚠️ Note importanti

- Il `databaseURL` usato è: `https://rscoaching-a6c61-default-rtdb.europe-west1.firebasedatabase.app`
  Se Firebase ti assegna un URL diverso, aggiornalo in entrambi i file HTML.
- Le regole del database sono aperte (modalità test). Quando hai atleti reali, aggiungeremo autenticazione.

---

## Prossimi step
- [ ] Sito web con landing page + form contatto
- [ ] Stripe per pagamenti
- [ ] Login Google per gli atleti
- [ ] Notifiche WhatsApp/email per alert RPE alto
