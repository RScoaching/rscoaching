// ============================================================
// RS Coaching - Exercise Database
// 270 exercises with verified YouTube video links
// Nomi verificati con titoli reali dei video YouTube
// ============================================================
// Structure: { name, cat, group, url }
// cat values: forza | pliometria | velocita_sprint | mobilita | recupero | priming | resistenza | olimpico
// ============================================================

(function(){

var _db = [

  // ─── LOWER BODY: Squat Variations ───────────────────────────
  {name:'Box Squat',                              cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=LYtagQH6P5k'},
  {name:'Bodyweight Squat',                       cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=yzL1543i1-o'},
  {name:'Dumbbell Goblet Box Squat',              cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=r0dFQWHNrRA'},
  {name:'Dumbbell Goblet Squat',                  cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=_oZYSM-5ZEs'},
  {name:'Heel Elevated Goblet Squat',             cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=2r4JzdrMycw'},
  {name:'High Bar Back Squat',                    cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=kG4iPzsdofA'},
  {name:'Barbell Front Squat',                    cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=dQS2i7DsnN0'},
  {name:'Zercher Squat',                          cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=EuDizUUiHEo'},
  {name:'Leg Press',                              cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=B8KqmwdomoU'},
  {name:'Horizontal Leg Press',                   cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=gKQxAgT7etM'},
  {name:'Single Leg Leg Press',                   cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=gspQiEILqOw'},
  {name:'Pendulum Squat',                         cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=J8czl8DDnJ4'},
  {name:'Hack Squat',                             cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=sw-5KcVZVk8'},
  {name:'Single Leg Box Squat',                   cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=0m9Xuq4q6W4'},
  {name:'Kickstand Box Squat',                    cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=YjDnq3oVfXQ'},
  {name:'Heels Elevated Wall Squat',              cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/shorts/hL82TgLzpxg'},
  {name:'Wall Sit',                               cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=RG7z0P9qrLk'},
  {name:'Weighted Wall Sit',                      cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=3pf2ZQEAKyM'},
  {name:'Single Leg Wall Sit',                    cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=PVyBgh_MouM'},
  {name:'Split Squat',                            cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=LKpxNE_WZDY'},
  {name:'Hand Supported Split Squat',             cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=0EZWlS2fZQY'},
  {name:'Upright Split Squat',                    cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=U7fM_XEC0mM'},
  {name:'Constrained Split Squat',                cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=hwyRKUnFrdU'},
  {name:'Dumbbell Split Squat',                   cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=U-Tx5BNPqwk'},
  {name:'Smith Machine Split Squat',              cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=SQO9oQvlvu0'},
  {name:'Reverse Lunge',                          cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=9De3B6tUMsA'},
  {name:'Dumbbell Reverse Lunge',                 cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=APwE_swEBT4'},
  {name:'Smith Machine Reverse Lunge',            cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=TK-5lUZZUOs'},
  {name:'Walking Lunge',                          cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=OeMiq8gEpiE'},
  {name:'Dumbbell Walking Lunge',                 cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=M8TwYZ2z9VQ'},
  {name:'RFESS',                                  cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=tcEAeBjSkHI'},
  {name:'Smith Machine RFESS',                    cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=UMWT44JPP0E'},
  {name:'Goblet Lateral Lunge',                   cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=jU9fS1pl0rk'},
  {name:'Lateral Lunge to Bench',                 cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=lfY5SWL4qa4'},
  {name:'Hand Supported Step Up',                 cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=-DfdJaAepdE'},
  {name:'Step Up',                                cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=ORE0cd7k85c'},
  {name:'Lateral Step Down',                      cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=_r_vsI64pyw'},
  {name:'Wall Constrained Lateral Step Down',     cat:'forza', group:'Squat Variations', url:'https://www.youtube.com/watch?v=tyyYyAdUEDY'},

  // ─── LOWER BODY: Hinging ────────────────────────────────────
  {name:'Dumbbell RDL',                           cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=F5ZGAP-ZMaI'},
  {name:'Kettlebell RDL',                         cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=P0VM5afBhao'},
  {name:'Barbell RDL',                            cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=sxMZ4Z98wYw'},
  {name:'Single Leg Deadlift',                    cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=Iok3nSFXLUU'},
  {name:'Single Leg RDL Smith Machine',           cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=XWj6VS-FNvg'},
  {name:'Trap Bar Deadlift',                      cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=wHadKZqjYDE'},
  {name:'Conventional Deadlift',                  cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=Nr45jEcvKZI'},
  {name:'Back Extension',                         cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=2pp8UJ6FOFM'},
  {name:'Back Extension Isometric',               cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=mnNdgr23DU8'},
  {name:'Weighted Back Extension',                cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=hYhAMi7F2z0'},
  {name:'Single Leg Back Extension',              cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=nOKCJnV0WTQ'},
  {name:'GHR Back Extension',                     cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=bzhkOyu4Srk'},
  {name:'Weighted GHR Back Extension',            cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=LCi5GY-lGpE'},
  {name:'GHR Back Extension Isometric',           cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=F7udL_EDVwM'},
  {name:'Bridge',                                 cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=_bCmHW_mLCU'},
  {name:'Single Leg Bridge',                      cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=U9M8dsoRYzU'},
  {name:'Feet Elevated Bridge Isometric',         cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=21PQq3Jr7y0'},
  {name:'Single Leg Feet Elevated Bridge Iso',    cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=8A58oebWtMw'},
  {name:'Feet Elevated Bridge',                   cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=sMnVc7TFHqM'},
  {name:'Single Leg Feet Elevated Bridge',        cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=XYH8Vxv-vw0'},
  {name:'Hip Thrust',                             cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=QatGP6bFeEg'},
  {name:'Barbell Hip Thrust',                     cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=Pw1OFZYuDCg'},
  {name:'Smith Machine Hip Thrust',               cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=hR8f64fXl88'},
  {name:'Single Leg Hip Thrust',                  cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=AMk-RkRaqNE'},
  {name:'Single Leg Weighted Hip Thrust',         cat:'forza', group:'Hinging', url:'https://www.youtube.com/watch?v=IwrJHxrkRjI'},

  // ─── LOWER BODY: Quad Isolation ─────────────────────────────
  {name:'Leg Extension (45°)',                    cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=xlyePpNZ6tM'},
  {name:'Single Leg Extension (45°)',             cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=zQhwjsp0RoU'},
  {name:'Leg Extension Machine',                  cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=s1JfTvyWdTs'},
  {name:'Single Leg Extension',                   cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=thPi-7zNgBw'},
  {name:'Isometric Leg Extension (60°) SL',       cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=A2xZFjPUX5M'},
  {name:'Isometric Leg Extension (60°)',          cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=7A8sZqkqI6s'},
  {name:'Isometric Leg Extension (90°)',          cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=RiPLR5Dn45Q'},
  {name:'Isometric Leg Extension (90°) SL',       cat:'forza', group:'Quad Isolation', url:'https://www.youtube.com/watch?v=JyW_wiKq4K0'},

  // ─── LOWER BODY: Hamstring ──────────────────────────────────
  {name:'Hamstring Curl Sliders Eccentric',       cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=a_FmZ4kz00s'},
  {name:'Single Leg Hamstring Curl Sliders Ecc',  cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=SLRv1VZIpQs'},
  {name:'Single Leg Hamstring Curl Sliders',      cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=9zX35aP4Fgs'},
  {name:'Prone Hamstring Curl',                   cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=041CRsFYBkw'},
  {name:'Single Leg Prone Hamstring Curl',        cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=2x5VUTGDGlo'},
  {name:'Seated Hamstring Curl Machine',          cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=ceG0f6ntNcw'},
  {name:'Single Leg Seated Hamstring Curl',       cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=h5NievMGthk'},
  {name:'Nordic Hamstring Curl',                  cat:'forza', group:'Hamstring', url:'https://www.youtube.com/watch?v=9TemDaazL8A'},

  // ─── LOWER BODY: Adductor ───────────────────────────────────
  {name:'Glute Bridge with Adductor Squeeze',     cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=y6kquy65vnc'},
  {name:'Seated Hip Adduction Isometric',         cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=muBqkAeu8WE'},
  {name:'Hip Adduction Machine',                  cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=CjAVezAggkI'},
  {name:'Short Copenhagen Plank',                 cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=X0c2IYsnz9s'},
  {name:'Short Copenhagen Plank Thruster',        cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=f4WdwcwPQnc'},
  {name:'Copenhagen Plank',                       cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=aDsaGBnvDQo'},
  {name:'Copenhagen Plank Thruster',              cat:'forza', group:'Adductor', url:'https://www.youtube.com/watch?v=BHhvUNVbaI0'},

  // ─── LOWER BODY: Abductor ───────────────────────────────────
  {name:'Hip Abduction Machine',                  cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=G_8LItOiZ0Q'},
  {name:'Lateral Band Walk',                      cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=0cahZCQAR4g'},
  {name:'Short Side Plank',                       cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=QAg3vvgnbXE'},
  {name:'Side Plank',                             cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=eRygfYEe1hs'},
  {name:'Side Plank Thrusters',                   cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=xltPDPYLePU'},
  {name:'Side Bend Roman Chair',                  cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=K94AABAKps8'},
  {name:'Side Bend Isometric Roman Chair',        cat:'forza', group:'Abductor', url:'https://www.youtube.com/watch?v=MwyGfdROx7s'},

  // ─── LOWER BODY: Calf ───────────────────────────────────────
  {name:'Heel Raise',                             cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=zvZp4FJjME4'},
  {name:'Isometric Heel Raise',                   cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=jkEZDU-V9Cs'},
  {name:'Single Leg Heel Raise',                  cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=2fiF2Ku8Y_U'},
  {name:'Isometric Single Leg Heel Raise',        cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=W4CpE2fLtzU'},
  {name:'Deficit Heel Raise',                     cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=i3tGgGc_PpE'},
  {name:'Single Leg Deficit Heel Raise',          cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=fpPkZxEDL1U'},
  {name:'Weighted Single Leg Deficit Heel Raise', cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=eD1kh9WDNqs'},
  {name:'Smith Machine Deficit Heel Raise',       cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=n4xxSywkAzY'},
  {name:'Smith Machine SL Deficit Heel Raise',    cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=xHtcneuhBR4'},
  {name:'Leg Press Heel Raise',                   cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=L5uHusE1wHo'},
  {name:'Seated Heel Raise',                      cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=rbDYKkYuRmI'},
  {name:'Seated Single Leg Heel Raise',           cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=4I-b4yKDR54'},
  {name:'Calf Raise',                             cat:'forza', group:'Calf', url:'https://www.youtube.com/shorts/WuLAyKAHvEY'},
  {name:'Front Foot Elevated SL Heel Raise',      cat:'forza', group:'Calf', url:'https://www.youtube.com/watch?v=HrD9me9ui5s'},

  // ─── UPPER BODY: Horizontal Press ───────────────────────────
  {name:'Dumbbell Floor Press',                   cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=jjlekYs1cfQ'},
  {name:'Dumbbell Bench Press',                   cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=ZaDlbm8E8Tg'},
  {name:'Barbell Bench Press',                    cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=ejI1Nlsul9k'},
  {name:'Machine Chest Press',                    cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=vwGmRvGIfwU'},
  {name:'Hands Elevated Push Up',                 cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=lLlsJw_FTzg'},
  {name:'Smith Machine Incline Push Up',          cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=EkQT7HjHWkY'},
  {name:'Push Up',                                cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=EH9mTZKjDtA'},
  {name:'Deficit Push Up',                        cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=TVge5xrwlT0'},
  {name:'Weighted Push Up',                       cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=ljYSjoKSJHg'},
  {name:'Smith Machine Bench Press',              cat:'forza', group:'Horizontal Press', url:'https://www.youtube.com/watch?v=1UMDU-HmGYc'},

  // ─── UPPER BODY: Horizontal Row ─────────────────────────────
  {name:'TRX Row',                                cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=6MdRWQlxgSk'},
  {name:'DB Row',                                 cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/shorts/Vr6yA3LdIak'},
  {name:'3 Point Row',                            cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=EvXXKK7mhvw'},
  {name:'Barbell Bent Over Row',                  cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=mzvLvYZmc_g'},
  {name:'Seated Row (Narrow Grip)',               cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=5Qqw-aXagNs'},
  {name:'Chest Supported Machine Row',            cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=q7uUnaCTMI8'},
  {name:'Chest Supported Dumbbell Row',           cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=7oqpWiwSjtY'},
  {name:'Feet Elevated Inverted Row',             cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=DIS839guYUk'},
  {name:'Kettlebell Gorilla Row',                 cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=NeaONUgPfWk'},
  {name:'Kettlebell Gorilla Row (Alternating)',    cat:'forza', group:'Horizontal Row', url:'https://www.youtube.com/watch?v=UsxcaALqr2c'},

  // ─── UPPER BODY: Vertical Press ─────────────────────────────
  {name:'Incline Dumbbell Bench Press',           cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=jMQA3XtJSgo'},
  {name:'Incline Barbell Bench Press',            cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=PZ7waXzAzZc'},
  {name:'Single Arm Landmine Press',              cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=ptsbUL-_I38'},
  {name:'Seated Dumbbell Press',                  cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=RgkzQ008m3I'},
  {name:'Strict Press',                           cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=I7ND5OficOo'},
  {name:'Incline Chest Press Machine',            cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=ArMbAy4emuA'},
  {name:'Shoulder Press Machine',                 cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=ago256sqP8E'},
  {name:'Smith Machine Incline Press',            cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=8urE8Z8AMQ4'},
  {name:'Smith Machine Seated Shoulder Press',    cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/watch?v=OLqZDUUD2b0'},
  {name:'Handstand Push Up',                      cat:'forza', group:'Vertical Press', url:'https://www.youtube.com/shorts/cMbbUjhNVws'},

  // ─── UPPER BODY: Vertical Pull ──────────────────────────────
  {name:'Assisted Pull Up (Machine)',             cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=oBGH9Uq43cY'},
  {name:'Chin Up',                                cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=9oLqZ3CQfLI'},
  {name:'Pull Up',                                cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=VErbHKhPC7Q'},
  {name:'Half Kneeling Single Arm Lat Pulldown',  cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=XbZgoSNJXm4'},
  {name:'Alternating Lat Pulldown',               cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=PVisHHBsemk'},
  {name:'Lat Pulldown',                           cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=sxbFnGt-EFc'},
  {name:'Close Grip Lat Pulldown',                cat:'forza', group:'Vertical Pull', url:'https://www.youtube.com/watch?v=IjoFCmLX7z0'},

  // ─── UPPER BODY: Bicep / Tricep ─────────────────────────────
  {name:'Dumbbell Curl',                          cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=l1tXK8CzxB4'},
  {name:'Incline Bicep Curl',                     cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=XVQBeug_9LU'},
  {name:'Single Arm Cable Curl',                  cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=0Fofg1WBvFY'},
  {name:'Cable Curl',                             cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=h9DPY5pCaGA'},
  {name:'Barbell Curl',                           cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=arUUE_4-boQ'},
  {name:'Dumbbell Skull Crusher',                 cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=jO2Jl9eZpXk'},
  {name:'Rope Cable Tricep Pushdown',             cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=y6EdXBdL75A'},
  {name:'Overhead Cable Tricep Extension',        cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=KvrP8c6eVBc'},
  {name:'Seated Overhead Tricep Extension',       cat:'forza', group:'Bicep Tricep', url:'https://www.youtube.com/watch?v=HADoxgsslvw'},

  // ─── UPPER BODY: Forearm / Elbow ────────────────────────────
  {name:'Band Wrist Extension',                   cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=RMCR4QFnXz8'},
  {name:'Band Wrist Flexion',                     cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=Zh6JlA4ABaM'},
  {name:'Weighted Wrist Flexion',                 cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=vzWj37n7p8E'},
  {name:'Weighted Wrist Extension',               cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=YkUuq7FFdsY'},
  {name:'Weighted Wrist Pronation Supination',    cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=TwRnf0T0Be8'},
  {name:'Weighted Radial Deviation',              cat:'forza', group:'Forearm Elbow', url:'https://www.youtube.com/watch?v=znLSt0AZwHQ'},

  // ─── UPPER BODY: Shoulder / Dips / Chest Flies ──────────────
  {name:'Strict Dip',                             cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=_YAwqEDgURk'},
  {name:'Assisted Dip Machine',                   cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=zQ9ELqwBgAE'},
  {name:'Weighted Dip',                           cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=VNa0hX_y6Fk'},
  {name:'Dumbbell Neutral Grip Fly',              cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=AVIBmE5iQrQ'},
  {name:'Incline Dumbbell Neutral Grip Fly',      cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=if2ntm01ty4'},
  {name:'Chest Fly Machine',                      cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=X3Nj2ZPwW04'},
  {name:'Dumbbell Reverse Fly',                   cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=hYXnvBRA_SE'},
  {name:'Machine Reverse Fly',                    cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=5YK4bgzXDp0'},
  {name:'Chest Supported Rear Delt Fly',          cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=tcHwAmcUMxQ'},
  {name:'Dumbbell Lateral Raise',                 cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=8aUc9snLOxU'},
  {name:'Dumbbell Front Raise',                   cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=E-E0EqERFBg'},
  {name:'Dumbbell Scaption Raise',                cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=whRoFG4LlNo'},
  {name:'Scaption with Band',                     cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=hZyDvFUoAXk'},
  {name:'Lateral Raise Band (90°)',               cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=nYiGpQi7OC8'},
  {name:'Banded Face Pull with ER',               cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=MJEKj5KnW88'},
  {name:'Banded T (Palms Up)',                    cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=IJLN6YUFwDg'},
  {name:'Rope Face Pull (ER)',                    cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=qCTlaGin9dQ'},
  {name:'Sidelying External Rotation',            cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=YzL3koB1mE4'},
  {name:'Standing Banded ER (Neutral)',           cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=UyBb2-bP0CU'},
  {name:'Cable Shoulder External Rotation',       cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=X-JP6sJTZAI'},
  {name:'External Rotation Supported',            cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=aOUM1BrCjUQ'},
  {name:'Cable Shoulder ER 90/90',                cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=QqX_p9yNqCQ'},
  {name:'Standing Cable IR (Neutral)',             cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=UXJTk06QMlk'},
  {name:'Standing Cable IR',                      cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=tk3_vnhav4Q'},
  {name:'Kneeling Cable IR',                      cat:'forza', group:'Shoulder RTC', url:'https://www.youtube.com/watch?v=EnV_cQcjGEE'},

  // ─── UPPER BODY: Cervical / Shoulder Isometrics ─────────────
  {name:'Cervical Flexion Isometric',             cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=dAl0amB6pjI'},
  {name:'Cervical Extension Isometric',           cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=KAm0r7ayscE'},
  {name:'Cervical Side Bend Isometric',           cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=WQaXhEQdNXA'},
  {name:'Cervical Rotation Isometric',            cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=XNo-P9J11bo'},
  {name:'Shoulder ER Isometric (Band)',           cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=cVheIBttq1o'},
  {name:'Shoulder ER Isometric',                  cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=NoNzQc3jLfA'},
  {name:'Shoulder IR Isometric (Wall)',           cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=Y5PbMAMEwpk'},
  {name:'Shoulder Flexion Isometric (Wall)',      cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=YfHajwyiXHU'},
  {name:'Shoulder Extension Isometric (Wall)',    cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=Yhcq_McAyUc'},
  {name:'Cable Shoulder ER Isometric',            cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=17lysTUp9Qs'},
  {name:'Shoulder IR Isometric (Band)',           cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=XU9GuyAttoQ'},
  {name:'Dead Hang',                              cat:'forza', group:'Isometrics', url:'https://www.youtube.com/watch?v=uXMW0I287Mk'},

  // ─── ROM / Mobility ─────────────────────────────────────────
  {name:'Elbow Flexion Extension ROM',            cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=s-1c9nzQrqA'},
  {name:'Supine Shoulder Flexion (Dowel)',         cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=3KIZy8lGcWA'},
  {name:'Supine Shoulder Flexion (Weighted Dowel)',cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=wYvRtqgFn2E'},
  {name:'Supine Shoulder Flexion',                cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=vlX7l0-0a-U'},
  {name:'Single Arm Supine Shoulder Flexion',     cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=nTh7AI0AdyM'},
  {name:'Single Arm Supine Shoulder Flexion (Bench)',cat:'mobilita',group:'ROM',url:'https://www.youtube.com/watch?v=vLD4jxOJsAw'},
  {name:'Supine Shoulder External Rotation',      cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=VVJrfu8sgkE'},
  {name:'Thoracic Extension',                     cat:'mobilita', group:'ROM', url:'https://www.youtube.com/shorts/S0NsYVrqIkA'},
  {name:'Supine Shoulder ER (Weighted)',          cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=KuASC28mXLs'},
  {name:'Supine Shoulder ER (Elevated + Weight)', cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=4NsijLSJdFg'},
  {name:'Supine Shoulder Internal Rotation',      cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=mrtJi8JWqrs'},
  {name:'Supine Shoulder IR (Weighted)',          cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=8ChEpZXJUpQ'},
  {name:'Shoulder Abduction AAROM',               cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=WGnq0qEzSHo'},
  {name:'Open Book',                              cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=buvA3OXA1iQ'},
  {name:"Child's Pose",                           cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=FLQDiUccsko'},
  {name:'Half Kneeling Thoracic Rotation',        cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=XmpMtdllbfQ'},
  {name:'Cervical Rotation ROM',                  cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=rwOYXQianAI'},
  {name:'Cervical Lateral Flexion ROM',           cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=jbluKek_ubU'},
  {name:'Cervical Extension ROM',                 cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=P7T_9ittmwY'},
  {name:'Cervical Flexion ROM',                   cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=dNBWcS2AKes'},
  {name:'Shoulder ER 90° Abduction ROM',          cat:'mobilita', group:'ROM', url:'https://www.youtube.com/watch?v=gKZjXsXlL9M'},

  // ─── JUMPING / PLYOMETRICS ───────────────────────────────────
  {name:'Pogo – Hands On Hips',                   cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=Fe8_xhN1CWE'},
  {name:'Double Leg Lateral Pogo Hops',           cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=8f2pN2KW0bM'},
  {name:'Double Leg Pogo Jump Fwd & Back',        cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=gdKcGIzqmjw'},
  {name:'Single Leg Vertical Pogo Hops',          cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=_o0KYe9wjdE'},
  {name:'Single Leg Lateral Pogo Hops',           cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=ULIYS48NF6I'},
  {name:'Single Leg Front to Back Pogo Hops',     cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=2ridGndVWbQ'},
  {name:'Double Leg Box Jump (Step Down)',         cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=QN8aAKRhyQI'},
  {name:'Single Leg Box Jump',                    cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/shorts/zZtb8DdZ4dg'},
  {name:'Double Leg Box Jump (Drop Landing)',     cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=f80FDg3g4v0'},
  {name:'Altitude Drop Box Jump',                 cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=mK8WmsxaQLk'},
  {name:'Countermovement Jump',                   cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=09yR5a4u-6A'},
  {name:'Seated Vertical Jump',                   cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=OOG5peEdHyw'},
  {name:'Repeated Countermovement Jumps',         cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=St2RywvRJWE'},
  {name:'Weighted Vertical Jump',                 cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=6ETN-gaUOKA'},
  {name:'Weighted Repeated Vertical Jump',        cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=-BqKZIv_4Rs'},
  {name:'Pogo Hop',                               cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/shorts/DOrgis760UY'},
  {name:'Hurdle 2 Leg Stick',                     cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=z3hcUdd8K2U'},
  {name:'Double Leg Hurdle Hop (Mini Bounce)',    cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=9FEPNlVKC-U'},
  {name:'Double Leg Continuous Hurdle Hop',       cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=c045DJ1R1Hg'},
  {name:'Single Leg Hurdle Forward Jumps',        cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=LsWN3HQU5oc'},
  {name:'Single Leg Lateral Hurdle Hops',         cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=iPNiem2uJA8'},
  {name:'Single Leg Box Jump (CMJ)',              cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=bvquHMvB2rE'},
  {name:'Broad Jump',                             cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=a8ce3oSN8Sk'},
  {name:'Lateral Box Jump',                       cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=03xGEXc54fE'},
  {name:'Depth Drop',                             cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=vPQv1gmrfUo'},
  {name:'Jump 180°',                              cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=lXyiqwNA5ZU'},
  {name:'Box Drop to Jump',                       cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=VfeSIznmgPM'},
  {name:'Lateral Bound to Box',                   cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=3JY0pxIPaC4'},
  {name:'Depth Jump to Box',                      cat:'pliometria', group:'Jumping', url:'https://www.youtube.com/watch?v=DxzbXy0lC6Y'},

  // ─── MEDICINE BALL ──────────────────────────────────────────
  {name:'Med Ball Slam',                          cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/shorts/eV_j3AtoMc4'},
  {name:'Med Ball Rotational Throw',              cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/shorts/2Gu98kumjDc'},
  {name:'Med Ball Chest Pass',                    cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/shorts/d0AvIcUXjdc'},
  {name:'Med Ball Overhead Throw',                cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/watch?v=JWJCzl8dNY0'},
  {name:'Med Ball Hip Toss',                      cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/shorts/M9ryqecCLf0'},
  {name:'Med Ball Overhead Slam',                 cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/watch?v=PJtAeldIRRU'},
  {name:'Med Ball Front Facing Rotational Throw', cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/watch?v=c2Xjiw9Lz_Q'},
  {name:'Med Ball Scoop Toss',                    cat:'pliometria', group:'Medicine Ball', url:'https://www.youtube.com/watch?v=rYwbiNgEw60'},

  // ─── CHANGE OF DIRECTION ────────────────────────────────────
  {name:'Low Box Shuffle',                        cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=mF8m_hCc5sI'},
  {name:'Low Box Straddle Jump',                  cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=fwdCibBgV2k'},
  {name:'Anti-Rotation Loaded Shuffle',           cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=vrTbRJ3uUvM'},
  {name:'Back Pedal Power',                       cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=zReopyaus3E'},
  {name:'Hip Turn',                               cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=RXz8A8dq7wk'},
  {name:'Hip Turn 45° Shuffle',                   cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=c8523JbE6Rk'},
  {name:'Hip Turn 90° Shuffle',                   cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=e5ULwYNWjjs'},
  {name:'Hip Turn Angled Lateral Run',            cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=TisM5MaSLOs'},
  {name:'Hip Turn Vertical Lateral Run',          cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=6m1wpq5nWrQ'},
  {name:'Lateral Stop',                           cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=8J1QaMk8VDs'},
  {name:'Lateral Stop to Lateral Run',            cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=sXFwRnqXr64'},
  {name:'Lunge Stop',                             cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=kvfm8XuLepI'},
  {name:'Reverse T Stop',                         cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=dGNL6bfDAIw'},
  {name:'T-Step Backpedal',                       cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=j7Z_e6BPAxI'},
  {name:'Single Leg Box Jump (Strength)',         cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=j7Z_e6BPAxI'},
  {name:'Single Leg CMJ',                         cat:'velocita_sprint', group:'Change of Direction', url:'https://www.youtube.com/watch?v=vrTbRJ3uUvM'}

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
