// ============================================================
// RS Coaching - Exercise Database
// 233+ exercises with YouTube video links
// ============================================================
// Structure: { name, cat, group, url }
// cat values: forza | pliometria | velocita_sprint | mobilita | recupero | priming | resistenza | olimpico
// ============================================================

(function(){

var _db = [

  // ─── LOWER BODY: Squat Variations ───────────────────────────
  {name:'Bodyweight Squat to Box',     cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=LYtagQH6P5k'},
  {name:'Bodyweight Squat',            cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=yzL1543i1-o'},
  {name:'Goblet Squat',                cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=r0dFQWHNrRA'},
  {name:'Goblet Squat Tempo',          cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=_oZYSM-5ZEs'},
  {name:'Heels Elevated Goblet Squat', cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=2r4JzdrMycw'},
  {name:'Back Squat',                  cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=kG4iPzsdofA'},
  {name:'Front Squat',                 cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=dQS2i7DsnN0'},
  {name:'Zercher Squat',               cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=EuDizUUiHEo'},
  {name:'Leg Press',                   cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=B8KqmwdomoU'},
  {name:'Horizontal Leg Press',        cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=gKQxAgT7etM'},
  {name:'Single Leg Leg Press',        cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=gspQiEILqOw'},
  {name:'Pendulum Squat',              cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=J8czl8DDnJ4'},
  {name:'Hack Squat',                  cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=sw-5KcVZVk8'},
  {name:'Single Leg Squat to Box',     cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=0m9Xuq4q6W4'},
  {name:'Kickstand Squat to Box',      cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=YjDnq3oVfXQ'},
  {name:'Heels Elevated Wall Squat',   cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/shorts/hL82TgLzpxg'},
  {name:'Wall Sit',                    cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=RG7z0P9qrLk'},
  {name:'Wall Sit + Heel Raise',       cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=3pf2ZQEAKyM'},
  {name:'Wall Sit + Band',             cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=PVyBgh_MouM'},
  {name:'Split Squat',                 cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=LKpxNE_WZDY'},
  {name:'Split Squat Heel Elevated',   cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=0EZWlS2fZQY'},
  {name:'Split Squat Forward Lean',    cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=U7fM_XEC0mM'},
  {name:'Split Squat + Band',          cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=hwyRKUnFrdU'},
  {name:'Split Squat Barbell',         cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=U-Tx5BNPqwk'},
  {name:'Split Squat Smith Machine',   cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=SQO9oQvlvu0'},
  {name:'Forward Lunge',               cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=9De3B6tUMsA'},
  {name:'Walking Lunge',               cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=APwE_swEBT4'},
  {name:'Reverse Lunge',               cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=TK-5lUZZUOs'},
  {name:'Lateral Lunge DB',            cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=OeMiq8gEpiE'},
  {name:'Lunge Barbell',               cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=M8TwYZ2z9VQ'},
  {name:'RFESS',                       cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=tcEAeBjSkHI'},
  {name:'RFESS Heel Elevated',         cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=UMWT44JPP0E'},
  {name:'Lateral Lunge',               cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=jU9fS1pl0rk'},
  {name:'Lateral Lunge Barbell',       cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=lfY5SWL4qa4'},
  {name:'Step Up',                     cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=-DfdJaAepdE'},
  {name:'Lateral Step Up',             cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=ORE0cd7k85c'},
  {name:'Lateral Step Down',           cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=_r_vsI64pyw'},
  {name:'Lateral Step Down Band',      cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=tyyYyAdUEDY'},

  // ─── LOWER BODY: Hinging ────────────────────────────────────
  {name:'RDL',                         cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=F5ZGAP-ZMaI'},
  {name:'RDL DB',                      cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=P0VM5afBhao'},
  {name:'RDL Band',                    cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=sxMZ4Z98wYw'},
  {name:'Single Leg RDL',              cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=Iok3nSFXLUU'},
  {name:'Single Leg RDL DB',           cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=XWj6VS-FNvg'},
  {name:'Deadlift',                    cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=wHadKZqjYDE'},
  {name:'Sumo Deadlift',               cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=Nr45jEcvKZI'},
  {name:'Back Extension',              cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=2pp8UJ6FOFM'},
  {name:'Back Extension Band',         cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=mnNdgr23DU8'},
  {name:'Back Extension DB',           cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=hYhAMi7F2z0'},
  {name:'Reverse Hyperextension',      cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=nOKCJnV0WTQ'},
  {name:'Reverse Hyperextension Band', cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=bzhkOyu4Srk'},
  {name:'45° Back Extension',          cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=LCi5GY-lGpE'},
  {name:'45° Back Extension DB',       cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=F7udL_EDVwM'},
  {name:'Hip Thrust',                  cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=_bCmHW_mLCU'},
  {name:'Hip Thrust DB',               cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=U9M8dsoRYzU'},
  {name:'Hip Thrust Barbell',          cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=21PQq3Jr7y0'},
  {name:'Hip Thrust Band',             cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=8A58oebWtMw'},
  {name:'Hip Thrust Machine',          cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=sMnVc7TFHqM'},
  {name:'Single Leg Hip Thrust',       cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=XYH8Vxv-vw0'},
  {name:'Single Leg Hip Thrust DB',    cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=QatGP6bFeEg'},
  {name:'Glute Bridge',                cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=Pw1OFZYuDCg'},
  {name:'Glute Bridge Barbell',        cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=hR8f64fXl88'},
  {name:'Glute Bridge Band',           cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=AMk-RkRaqNE'},
  {name:'Glute Bridge Single Leg',     cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=IwrJHxrkRjI'},

  // ─── LOWER BODY: Quad Isolation ─────────────────────────────
  {name:'Leg Extension',               cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=xlyePpNZ6tM'},
  {name:'Leg Extension Single Leg',    cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=zQhwjsp0RoU'},
  {name:'Terminal Knee Extension',     cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=s1JfTvyWdTs'},
  {name:'Sissy Squat',                 cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=thPi-7zNgBw'},
  {name:'Reverse Nordic',              cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=A2xZFjPUX5M'},
  {name:'Spanish Squat',               cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=7A8sZqkqI6s'},
  {name:'Cyclist Squat',               cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=RiPLR5Dn45Q'},
  {name:'VMO Drop Squat',              cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=JyW_wiKq4K0'},

  // ─── LOWER BODY: Hamstring ──────────────────────────────────
  {name:'Nordic Curl',                 cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=a_FmZ4kz00s'},
  {name:'Nordic Curl Eccentric',       cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=SLRv1VZIpQs'},
  {name:'Leg Curl Machine',            cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=9zX35aP4Fgs'},
  {name:'Leg Curl Single Leg',         cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=041CRsFYBkw'},
  {name:'Hamstring Curl Band',         cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=2x5VUTGDGlo'},
  {name:'Slider Leg Curl',             cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=ceG0f6ntNcw'},
  {name:'Slider Leg Curl Single Leg',  cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=h5NievMGthk'},
  {name:'GHD Hamstring Curl',          cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=9TemDaazL8A'},

  // ─── LOWER BODY: Adductor ───────────────────────────────────
  {name:'Copenhagen Plank',            cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=y6kquy65vnc'},
  {name:'Copenhagen Plank Progressione',cat:'forza',group:'Adductor', url:'https://www.youtube.com/watch?v=muBqkAeu8WE'},
  {name:'Adductor Machine',            cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=CjAVezAggkI'},
  {name:'Adductor Slide',              cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=X0c2IYsnz9s'},
  {name:'Adductor Squeeze',            cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=f4WdwcwPQnc'},
  {name:'Side Lying Adductor',         cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=aDsaGBnvDQo'},
  {name:'Standing Adductor Band',      cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=BHhvUNVbaI0'},

  // ─── LOWER BODY: Abductor / Side Planks ─────────────────────
  {name:'Side Plank',                  cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=G_8LItOiZ0Q'},
  {name:'Side Plank Hip Abduction',    cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=0cahZCQAR4g'},
  {name:'Hip Abduction Machine',       cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=QAg3vvgnbXE'},
  {name:'Lateral Band Walk',           cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=eRygfYEe1hs'},
  {name:'Clamshell',                   cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=xltPDPYLePU'},
  {name:'Side Lying Hip Abduction',    cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=K94AABAKps8'},
  {name:'Hip Abduction Cable',         cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=MwyGfdROx7s'},

  // ─── LOWER BODY: Calf ───────────────────────────────────────
  {name:'Standing Calf Raise',         cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=zvZp4FJjME4'},
  {name:'Single Leg Calf Raise',       cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=jkEZDU-V9Cs'},
  {name:'Seated Calf Raise',           cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=2fiF2Ku8Y_U'},
  {name:'Leg Press Calf Raise',        cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=W4CpE2fLtzU'},
  {name:'Calf Raise Barbell',          cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=i3tGgGc_PpE'},
  {name:'Donkey Calf Raise',           cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=fpPkZxEDL1U'},
  {name:'Tibialis Raise',              cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=eD1kh9WDNqs'},
  {name:'Tibialis Raise Band',         cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=n4xxSywkAzY'},
  {name:'Soleus Raise',                cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=xHtcneuhBR4'},
  {name:'Eccentric Calf Raise',        cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=L5uHusE1wHo'},
  {name:'Calf Raise Smith Machine',    cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=rbDYKkYuRmI'},
  {name:'Calf Raise Step',             cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=4I-b4yKDR54'},
  {name:'Calf Raise Weights',          cat:'forza', group:'Calf', url:'https://www.youtube.com/shorts/WuLAyKAHvEY'},
  {name:'Calf Raise Machine',          cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=HrD9me9ui5s'},

  // ─── UPPER BODY: Horizontal Press ───────────────────────────
  {name:'Bench Press',                 cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=jjlekYs1cfQ'},
  {name:'DB Bench Press',              cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=ZaDlbm8E8Tg'},
  {name:'Incline Bench Press',         cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=ejI1Nlsul9k'},
  {name:'Incline DB Press',            cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=vwGmRvGIfwU'},
  {name:'Close Grip Bench Press',      cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=lLlsJw_FTzg'},
  {name:'Push Up',                     cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=EkQT7HjHWkY'},
  {name:'Push Up Elevated',            cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=EH9mTZKjDtA'},
  {name:'Cable Chest Press',           cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=TVge5xrwlT0'},
  {name:'Machine Chest Press',         cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=ljYSjoKSJHg'},
  {name:'Landmine Press',              cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=1UMDU-HmGYc'},

  // ─── UPPER BODY: Horizontal Row ─────────────────────────────
  {name:'Barbell Row',                 cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=6MdRWQlxgSk'},
  {name:'DB Row',                      cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/shorts/Vr6yA3LdIak'},
  {name:'Cable Row',                   cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=EvXXKK7mhvw'},
  {name:'Machine Row',                 cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=mzvLvYZmc_g'},
  {name:'TRX Row',                     cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=5Qqw-aXagNs'},
  {name:'Chest Supported Row',         cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=q7uUnaCTMI8'},
  {name:'Pendlay Row',                 cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=7oqpWiwSjtY'},
  {name:'Single Arm Cable Row',        cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=DIS839guYUk'},
  {name:'Seal Row',                    cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=NeaONUgPfWk'},
  {name:'Meadows Row',                 cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=UsxcaALqr2c'},

  // ─── UPPER BODY: Vertical Press ─────────────────────────────
  {name:'Overhead Press',              cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=jMQA3XtJSgo'},
  {name:'DB Overhead Press',           cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=PZ7waXzAzZc'},
  {name:'Arnold Press',                cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=ptsbUL-_I38'},
  {name:'Push Press',                  cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=RgkzQ008m3I'},
  {name:'Landmine Shoulder Press',     cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=I7ND5OficOo'},
  {name:'Z Press',                     cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=ArMbAy4emuA'},
  {name:'Cable Overhead Press',        cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=ago256sqP8E'},
  {name:'Machine Shoulder Press',      cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=8urE8Z8AMQ4'},
  {name:'Pike Push Up',                cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=OLqZDUUD2b0'},
  {name:'Handstand Push Up',           cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/shorts/cMbbUjhNVws'},

  // ─── UPPER BODY: Vertical Pull ──────────────────────────────
  {name:'Pull Up',                     cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=oBGH9Uq43cY'},
  {name:'Chin Up',                     cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=9oLqZ3CQfLI'},
  {name:'Lat Pulldown',                cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=VErbHKhPC7Q'},
  {name:'Lat Pulldown Wide Grip',      cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=XbZgoSNJXm4'},
  {name:'Cable Pullover',              cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=PVisHHBsemk'},
  {name:'Assisted Pull Up',            cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=sxbFnGt-EFc'},
  {name:'Neutral Grip Pull Up',        cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=IjoFCmLX7z0'},

  // ─── UPPER BODY: Bicep / Tricep ─────────────────────────────
  {name:'Bicep Curl',                  cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=l1tXK8CzxB4'},
  {name:'DB Bicep Curl',               cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=XVQBeug_9LU'},
  {name:'Hammer Curl',                 cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=0Fofg1WBvFY'},
  {name:'Preacher Curl',               cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=h9DPY5pCaGA'},
  {name:'Tricep Pushdown',             cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=arUUE_4-boQ'},
  {name:'Tricep Extension',            cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=jO2Jl9eZpXk'},
  {name:'Skull Crusher',               cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=y6EdXBdL75A'},
  {name:'Diamond Push Up',             cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=KvrP8c6eVBc'},
  {name:'Close Grip Push Up',          cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=HADoxgsslvw'},

  // ─── UPPER BODY: Forearm / Elbow ────────────────────────────
  {name:'Wrist Curl',                  cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=RMCR4QFnXz8'},
  {name:'Wrist Extension',             cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=Zh6JlA4ABaM'},
  {name:'Pronation Supination',        cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=vzWj37n7p8E'},
  {name:'Forearm Roller',              cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=YkUuq7FFdsY'},
  {name:'Elbow Flexion Isometric',     cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=TwRnf0T0Be8'},
  {name:'Tyler Twist',                 cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=znLSt0AZwHQ'},

  // ─── UPPER BODY: Shoulder / RTC / Chest / Upper Back ────────
  {name:'External Rotation',           cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=_YAwqEDgURk'},
  {name:'Internal Rotation',           cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=zQ9ELqwBgAE'},
  {name:'Face Pull',                   cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=VNa0hX_y6Fk'},
  {name:'Rear Delt Fly',               cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=AVIBmE5iQrQ'},
  {name:'Band Pull Apart',             cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=if2ntm01ty4'},
  {name:'Lateral Raise',               cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=X3Nj2ZPwW04'},
  {name:'Front Raise',                 cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=hYXnvBRA_SE'},
  {name:'Cable Lateral Raise',         cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=5YK4bgzXDp0'},
  {name:'Shoulder Y Raise',            cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=tcHwAmcUMxQ'},
  {name:'Shoulder T Raise',            cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=8aUc9snLOxU'},
  {name:'Shoulder W Raise',            cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=E-E0EqERFBg'},
  {name:'Scapular Push Up',            cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=whRoFG4LlNo'},
  {name:'Scapular Retraction',         cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=hZyDvFUoAXk'},
  {name:'RTC Side Lying ER',           cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=nYiGpQi7OC8'},
  {name:'RTC Cable ER',                cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=MJEKj5KnW88'},
  {name:'Prone Y',                     cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=IJLN6YUFwDg'},
  {name:'Prone T',                     cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=qCTlaGin9dQ'},
  {name:'Prone W',                     cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=YzL3koB1mE4'},
  {name:'Wall Slide',                  cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=UyBb2-bP0CU'},
  {name:'Chest Fly',                   cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=X-JP6sJTZAI'},
  {name:'DB Chest Fly',                cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=aOUM1BrCjUQ'},
  {name:'Cable Chest Fly',             cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=QqX_p9yNqCQ'},
  {name:'Pec Deck',                    cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=UXJTk06QMlk'},
  {name:'Upper Back Row Band',         cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=tk3_vnhav4Q'},
  {name:'Shrug',                       cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=EnV_cQcjGEE'},

  // ─── UPPER BODY: Shoulder / Cervical Isometrics ─────────────
  {name:'Cervical Flexion Isometric',      cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=dAl0amB6pjI'},
  {name:'Cervical Extension Isometric',    cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=KAm0r7ayscE'},
  {name:'Cervical Lateral Flexion Iso',    cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=WQaXhEQdNXA'},
  {name:'Cervical Rotation Isometric',     cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=XNo-P9J11bo'},
  {name:'Shoulder Flexion Isometric',      cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=cVheIBttq1o'},
  {name:'Shoulder Extension Isometric',    cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=NoNzQc3jLfA'},
  {name:'Shoulder Abduction Isometric',    cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=Y5PbMAMEwpk'},
  {name:'Shoulder ER Isometric',           cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=YfHajwyiXHU'},
  {name:'Shoulder IR Isometric',           cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=Yhcq_McAyUc'},
  {name:'Scapular Depression Hold',        cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=17lysTUp9Qs'},
  {name:'Scapular Protraction Hold',       cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=XU9GuyAttoQ'},
  {name:'Dead Hang',                       cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=uXMW0I287Mk'},

  // ─── ROM / Mobility ─────────────────────────────────────────
  {name:'Hip 90/90',                   cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=s-1c9nzQrqA'},
  {name:'Hip Flexor Stretch',          cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=3KIZy8lGcWA'},
  {name:'Piriformis Stretch',          cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=wYvRtqgFn2E'},
  {name:'Hamstring Stretch',           cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=vlX7l0-0a-U'},
  {name:'Quad Stretch',                cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=nTh7AI0AdyM'},
  {name:'Hip Abductor Stretch',        cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=vLD4jxOJsAw'},
  {name:'Thoracic Rotation',           cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=VVJrfu8sgkE'},
  {name:'Thoracic Extension',          cat:'mobilita', group:'ROM', url:'https://www.youtube.com/shorts/S0NsYVrqIkA'},
  {name:'Shoulder Sleeper Stretch',    cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=KuASC28mXLs'},
  {name:'Pec Stretch',                 cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=4NsijLSJdFg'},
  {name:'Lat Stretch',                 cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=mrtJi8JWqrs'},
  {name:'Ankle Mobility',              cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=8ChEpZXJUpQ'},
  {name:'Hip Circle',                  cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=WGnq0qEzSHo'},
  {name:'Cat Cow',                     cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=buvA3OXA1iQ'},
  {name:"Child's Pose",                cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=FLQDiUccsko'},
  {name:'Pigeon Pose',                 cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=XmpMtdllbfQ'},
  {name:'Figure 4 Stretch',           cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=rwOYXQianAI'},
  {name:'Couch Stretch',               cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=jbluKek_ubU'},
  {name:"World's Greatest Stretch",   cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=P7T_9ittmwY'},
  {name:'Deep Squat Hold',             cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=dNBWcS2AKes'},
  {name:'Inchworm',                    cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=gKZjXsXlL9M'},

  // ─── JUMPING ────────────────────────────────────────────────
  {name:'Box Jump',                    cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=Fe8_xhN1CWE'},
  {name:'Box Jump Step Down',          cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=8f2pN2KW0bM'},
  {name:'Squat Jump',                  cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=gdKcGIzqmjw'},
  {name:'Countermovement Jump',        cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=_o0KYe9wjdE'},
  {name:'Depth Jump',                  cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=ULIYS48NF6I'},
  {name:'Broad Jump',                  cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=2ridGndVWbQ'},
  {name:'Lateral Box Jump',            cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=QN8aAKRhyQI'},
  {name:'Single Leg Box Jump',         cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/shorts/zZtb8DdZ4dg'},
  {name:'Tuck Jump',                   cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=f80FDg3g4v0'},
  {name:'Split Jump',                  cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=mK8WmsxaQLk'},
  {name:'Hurdle Jump',                 cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=09yR5a4u-6A'},
  {name:'Drop Jump',                   cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=OOG5peEdHyw'},
  {name:'Reactive Jump',               cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=St2RywvRJWE'},
  {name:'Standing Triple Jump',        cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=6ETN-gaUOKA'},
  {name:'Ankle Hop',                   cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=-BqKZIv_4Rs'},
  {name:'Pogo Hop',                    cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/shorts/DOrgis760UY'},
  {name:'Lateral Hop',                 cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=z3hcUdd8K2U'},
  {name:'Single Leg Hop',              cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=9FEPNlVKC-U'},
  {name:'Continuous Box Jump',         cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=c045DJ1R1Hg'},
  {name:'Lateral Bound',               cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=LsWN3HQU5oc'},
  {name:'Alternating Bound',           cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=iPNiem2uJA8'},
  {name:'Power Skip',                  cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=bvquHMvB2rE'},
  {name:'Jump Rope',                   cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=a8ce3oSN8Sk'},
  {name:'Jump Rope Double Under',      cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=03xGEXc54fE'},
  {name:'Depth Drop',                  cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=vPQv1gmrfUo'},
  {name:'Jump 180°',                   cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=lXyiqwNA5ZU'},
  {name:'Box Drop to Jump',            cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=VfeSIznmgPM'},
  {name:'Lateral Bound to Box',        cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=3JY0pxIPaC4'},
  {name:'Depth Jump to Box',           cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=DxzbXy0lC6Y'},

  // ─── MEDICINE BALL ──────────────────────────────────────────
  {name:'Med Ball Slam',               cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/shorts/eV_j3AtoMc4'},
  {name:'Med Ball Rotational Throw',   cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/shorts/2Gu98kumjDc'},
  {name:'Med Ball Chest Pass',         cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/shorts/d0AvIcUXjdc'},
  {name:'Med Ball Overhead Throw',     cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/watch?v=JWJCzl8dNY0'},
  {name:'Med Ball Hip Toss',           cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/shorts/M9ryqecCLf0'},
  {name:'Med Ball Squat Throw',        cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/watch?v=PJtAeldIRRU'},
  {name:'Med Ball Drop',               cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/watch?v=c2Xjiw9Lz_Q'},
  {name:'Med Ball Wall Ball',          cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/watch?v=rYwbiNgEw60'},

  // ─── CHANGE OF DIRECTION ────────────────────────────────────
  {name:'T-Drill',                     cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=mF8m_hCc5sI'},
  {name:'5-10-5 Shuttle',              cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=fwdCibBgV2k'},
  {name:'COD 45° Cut',                 cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=vrTbRJ3uUvM'},
  {name:'505 Agility Test',            cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=zReopyaus3E'},
  {name:'Lateral Shuffle',             cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=RXz8A8dq7wk'},
  {name:'Crossover Step',              cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=c8523JbE6Rk'},
  {name:'Pro Agility',                 cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=e5ULwYNWjjs'},
  {name:'L-Drill',                     cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=TisM5MaSLOs'},
  {name:'Illinois Agility',            cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=6m1wpq5nWrQ'},
  {name:'Figure 8 Drill',              cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=8J1QaMk8VDs'},
  {name:'Reactive COD',                cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=sXFwRnqXr64'},
  {name:'Deceleration Drill',          cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=kvfm8XuLepI'},
  {name:'Plant and Cut',               cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=dGNL6bfDAIw'},
  {name:'Zigzag Run',                  cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=j7Z_e6BPAxI'},
  {name:'Backpedal to Sprint',         cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=j7Z_e6BPAxI'},
  {name:'Reactive Lateral Cut',        cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=vrTbRJ3uUvM'}

];

// ─── Public API ──────────────────────────────────────────────
window.EXERCISES_DB = _db;

// Name → URL lookup (case-insensitive)
window.EX_URL_MAP = {};
_db.forEach(function(e){
  if(e.url) window.EX_URL_MAP[e.name.toLowerCase().trim()] = e.url;
});

window.getExUrl = function(name){
  return window.EX_URL_MAP[(name||'').toLowerCase().trim()] || null;
};

// Get all exercises for a category
window.getExBycat = function(cat){
  return _db.filter(function(e){ return e.cat === cat; });
};

})();
