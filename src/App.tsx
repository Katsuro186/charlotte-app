import { useEffect, useState } from 'react'
import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import InteractiveCandleWorkshop from './components/masterclasses/InteractiveCandleWorkshop'
import InteractiveCharlotteRecipe from './components/recipes/InteractiveCharlotteRecipe'

export default function App() {

const [screen, setScreen] = useState<
  | 'home'
  | 'cooking'
  | 'workshops'
  | 'candles'
  | 'charlotte'
>(() => {

  const saved =
    localStorage.getItem(
      'app-current-screen'
    )

  if (
    saved === 'home' ||
    saved === 'cooking' ||
    saved === 'workshops' ||
    saved === 'candles' ||
    saved === 'charlotte'
  ) {

    return saved

  }

  return 'home'

})
useEffect(() => {

  localStorage.setItem(
    'app-current-screen',
    screen
  )

}, [screen])


  const [hoveredCard, setHoveredCard] = useState<
    null |
    'cooking' |
    'workshops'
  >(null)

const [showIntro, setShowIntro] =
  useState(() => {

    const saved =
      localStorage.getItem(
        'app-show-intro'
      )

    return saved !== 'false'

  })
  useEffect(() => {

  localStorage.setItem(
    'app-show-intro',
    String(showIntro)
  )

}, [showIntro])
  // =========================
  // COOKING SCREEN
  // =========================

  if (screen === 'cooking') {

    return (

<div className="min-h-screen overflow-hidden bg-[#f6efe8] px-5 pt-14 pb-6 md:px-10">
          {/* BACK BUTTON */}

        <motion.div
  initial={{
    opacity: 0,
    y: -10,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  className="mb-12 flex items-center justify-between"
>

  <motion.button
    whileHover={{
      y: -2,
    }}
    whileTap={{
      scale: 0.98,
    }}
    onClick={() => setScreen('home')}
    className="
      group
      flex
      items-center
      gap-3

      rounded-full

      border
      border-[#eadfce]

      bg-white/75
      backdrop-blur-xl

      px-4
      py-3

      shadow-[0_10px_30px_rgba(120,90,60,0.08)]

      transition-all
      duration-300

      hover:bg-white
      hover:shadow-[0_15px_40px_rgba(120,90,60,0.12)]
    "
  >

   <div
  className="
    relative
    flex
    h-10
    w-10
    items-center
    justify-center

    rounded-full

    bg-gradient-to-br
    from-[#f3d8bb]
    to-[#e8c19d]

    text-[#9f6d45]

    shadow-inner

    text-[20px]
    font-light
  "
>
  ←
</div>

    <div className="text-left">

      <div
        className="
          text-[10px]
          uppercase
          tracking-[0.3em]

          text-[#c79b74]
        "
      >
        Cozy Evenings
      </div>

      <div
        className="
          text-[15px]
          font-medium

          text-[#4b3931]
        "
      >
        Все разделы
      </div>

    </div>

  </motion.button>

</motion.div>

        {/* HERO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-14"
        >

          <h1
            className="
              text-5xl
              font-bold
              tracking-[-0.06em]
              text-[#3f312d]
              md:text-7xl
            "
          >
            Готовим вместе 🥧
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-[1.9]
              text-[#78685f]
              md:text-xl
            "
          >
            Рецепты для уютных вечеров,
            красивой атмосферы
            и совместных воспоминаний.
          </p>

        </motion.div>

        {/* RECIPES */}

        <div className="grid gap-8 md:grid-cols-2">

          {/* CHARLOTTE */}

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
            "
          >

            {/* IMAGE */}

            <div className="absolute inset-0">

              <img
  src="https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?q=80&w=1400&auto=format&fit=crop"
  alt="Charlotte"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />

<div className="absolute inset-0 bg-gradient-to-t from-[#120b08]/95 via-[#2c1d15]/40 to-transparent" />

<div className="
  absolute
  inset-0
  bg-[radial-gradient(circle_at_top,rgba(255,220,180,0.22),transparent_55%)]
"
/>
            </div>

            {/* CONTENT */}

            <div
              className="
                relative
                z-10
                flex
                min-h-[540px]
                flex-col
                justify-end
                p-8
                md:p-10
              "
            >

              <div
                className="
                  mb-5
                  inline-flex
                  w-fit
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2
                  text-[11px]
                  tracking-[0.3em]
                  text-white/90
                  backdrop-blur-xl
                "
              >
                RECIPE EXPERIENCE
              </div>

              <div className="mb-5 text-7xl">
                🥧
              </div>

              <h2
                className="
                  mb-5
                  text-5xl
                  font-bold
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                "
              >
                Шарлотка
              </h2>

              <p
                className="
                  max-w-md
                  text-lg
                  leading-[1.8]
                  text-white/80
                "
              >
                Пошаговый immersive-рецепт
                для уютного совместного вечера.
              </p>

              <motion.button
  whileHover={{
    scale: 1.04,
  }}
  whileTap={{
    scale: 0.96,
  }}
  onClick={() => setScreen('charlotte')

  }
  className="
    mt-8
    w-fit
    rounded-full
    border
    border-white/20
    bg-white/10
    px-6
    py-3
    text-white
    backdrop-blur-xl
    transition-all
    hover:bg-white/20
  "
>
  Открыть ✨
</motion.button>

            </div>

          </motion.div>

        </div>

      </div>

    )

  }

  // =========================
  // WORKSHOPS SCREEN
  // =========================

  if (screen === 'workshops') {

    return (

<div className="min-h-screen overflow-hidden bg-[#f6efe8] px-5 pt-14 pb-6 md:px-10">
        {/* BACK */}


 <motion.div
  initial={{
    opacity: 0,
    y: -10,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  className="mb-12 flex items-center justify-between"
>

  <motion.button
    whileHover={{
      y: -2,
      scale: 1.01,
    }}
    whileTap={{
      scale: 0.985,
    }}
    onClick={() => setScreen('home')}
    className="
      group
      relative
      overflow-hidden

      flex
      items-center
      gap-3

      rounded-[26px]

      border
      border-white/70

      bg-white/78
      backdrop-blur-2xl

      px-5
      py-4

      shadow-[0_10px_35px_rgba(140,110,80,0.10)]

      transition-all
      duration-500

      hover:bg-white
      hover:shadow-[0_16px_45px_rgba(140,110,80,0.15)]
    "
  >

    <div
      className="
        absolute
        inset-0

        bg-gradient-to-br
        from-white/40
        to-transparent

        opacity-0
        transition-opacity
        duration-500

        group-hover:opacity-100
      "
    />

   <div
  className="
    relative
    flex
    h-10
    w-10
    items-center
    justify-center

    rounded-full

    bg-gradient-to-br
    from-[#f3d8bb]
    to-[#e8c19d]

    text-[#9f6d45]

    shadow-inner

    text-[20px]
    font-light
  "
>
  ←
</div>

    <div className="relative text-left">

      <div
        className="
          text-[10px]
          font-semibold

          uppercase
          tracking-[0.28em]

          text-[#c69b74]
        "
      >
        Cozy Evenings
      </div>

      <div
        className="
          text-[15px]
          font-medium
          leading-none

          text-[#4e3b34]
        "
      >
        Все разделы
      </div>

    </div>

  </motion.button>

</motion.div>


        {/* HERO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-14"
        >


          <h1
            className="
              text-5xl
              font-bold
              tracking-[-0.06em]
              text-[#3f312d]
              md:text-7xl
            "
          >
            Домашние мастер-классы 🕯️
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-[1.9]
              text-[#78685f]
              md:text-xl
            "
          >


            Домашний мастер-класс
по созданию уютных
ароматических свечей.
          </p>

        </motion.div>

        {/* WORKSHOP CARD */}

        <div className="grid gap-8 md:grid-cols-2">

          <motion.div
            whileHover={{
              y: -10,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
            "
          >

            <div className="absolute inset-0">

              <img
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1400&auto=format&fit=crop"
                alt="Candles"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1d140f]/85 via-[#2a1c15]/30 to-transparent" />

            </div>

            <div
              className="
                relative
                z-10
                flex
                min-h-[680px]
                flex-col
                justify-end
                p-8
                md:p-10
              "
            >

              <div
                className="
                  mb-5
                  inline-flex
                  w-fit
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2
                  text-[11px]
                  tracking-[0.3em]
                  text-white/90
                  backdrop-blur-xl
                "
              >
                WORKSHOP EXPERIENCE
              </div>

              <div className="mb-5 text-7xl">
                🕯️
              </div>

              <h2
                className="
                  mb-5
                  text-5xl
                  font-bold
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                "
              >
                Ароматические свечи
              </h2>

              <p
                className="
                  max-w-md
                  text-lg
                  leading-[1.8]
                  text-white/80
                "
              >
                Домашний мастер-класс
                по созданию атмосферных свечей.
              </p>

              <motion.button
  whileHover={{
    scale: 1.04,
  }}
  whileTap={{
    scale: 0.96,
  }}
  onClick={() => {

    setScreen('candles')

  }}
  className="
    mt-8
    w-fit
    rounded-full
    border
    border-white/20
    bg-white/10
    px-6
    py-3
    text-white
    backdrop-blur-xl
    transition-all
    hover:bg-white/20
  "
>
  Открыть ✨
</motion.button>

            </div>

          </motion.div>

        </div>

      </div>

    )

  }

// =========================
// CHARLOTTE SCREEN
// =========================

if (screen === 'charlotte') {

  return (
    <InteractiveCharlotteRecipe
      onBack={() => setScreen('cooking')}
    />
  )

}
if (showIntro) {

  return (

    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#f6efe8]
        px-6
      "
    >

      {/* LIGHT */}

      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#f4dcc7]
          blur-3xl
        "
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[-200px]
          top-[-200px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#ead3c4]
          blur-3xl
        "
      />

      <div className="relative z-10 text-center">

        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mb-5
            text-[12px]
            tracking-[0.45em]
            text-[#b08b70]
          "
        >
          COZY EVENINGS
        </motion.div>

        <motion.h1
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.15,
            duration: 1,
          }}
          className="
            max-w-5xl
            text-6xl
            font-bold
            leading-[0.92]
            tracking-[-0.07em]
            text-[#3b2f2a]
            md:text-8xl
          "
        >
          Красивые вечера
начинаются здесь ✨
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-xl
            leading-[1.9]
            text-[#766459]
          "
        >
          Совместная готовка,
атмосферные мастер-классы
и моменты, которые хочется запомнить.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={() => setShowIntro(false)}
          className="
            mt-14
            rounded-full
            bg-[#3b2f2a]
            px-10
            py-5
            text-lg
            text-white
            shadow-2xl
          "
        >
Войти ✨
        </motion.button>

      </div>

    </motion.div>

  )

}

if (screen === 'candles') {

  return (

    <InteractiveCandleWorkshop
      onBack={() => setScreen('workshops')}
    />

  )

}

  // =========================
  // HOME SCREEN
  // =========================

  return (

  <AnimatePresence mode="wait">

    <motion.div
      key={screen}
      initial={{
        opacity: 0,
        scale: 1.02,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.98,
        y: -20,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <div className="relative min-h-screen overflow-hidden bg-[#f6efe8]">

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            left-[-250px]
            top-[-180px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#f4dcc7]
            blur-3xl
          "
        />

        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-240px]
            right-[-180px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#e8cfc2]
            blur-3xl
          "
        />

      </div>

      {/* LIGHT */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          px-6
          py-10
          md:px-10
          lg:px-14
        "
      >

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-20
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div>

            <div className="mb-2 text-[11px] tracking-[0.35em] text-[#9f8878]">
              COZY EVENINGS
            </div>

            <div className="text-[#7f6a5d]">
              Curated experiences for memorable nights
            </div>

          </div>

          <div
            className="
              w-fit
              rounded-full
              border
              border-white/30
              bg-white/40
              px-5
              py-3
              text-sm
              text-[#6d584d]
              backdrop-blur-xl
              shadow-[0_10px_30px_rgba(120,90,60,0.08)]
            "
          >
            Premium Experiences ✨
          </div>

        </motion.div>

        {/* HERO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="mb-20"
        >

          <h1
            className="
              max-w-5xl
              text-5xl
              font-bold
              leading-[0.92]
              tracking-[-0.07em]
              text-[#3b2f2a]
              md:text-8xl
            "
          >
Уютные вечера,
которые хочется
запомнить ✨
          </h1>

          <p
            className="
              mt-10
              max-w-3xl
              text-xl
              leading-[1.9]
              text-[#766459]
              md:text-2xl
            "
          >
            Совместная готовка,
домашние мастер-классы,
тёплый свет и атмосфера,
которую хочется сохранить.
          </p>

        </motion.div>

        {/* CARDS */}

        <div className="grid gap-10 md:grid-cols-2">

          {/* COOKING */}

          <motion.button
            whileHover={{
              y: -12,
              scale: 1.015,
            }}
            transition={{
              duration: 0.35,
            }}
            onHoverStart={() => setHoveredCard('cooking')}
            onHoverEnd={() => setHoveredCard(null)}
            onClick={() => setScreen('cooking')}
            className="
              group
              relative
              overflow-hidden
              rounded-[42px]
              text-left
            "
          >

            <div className="absolute inset-0">

              <img
  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
  alt="Cooking Together"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1f130d]/80 via-[#2f2018]/30 to-transparent" />

            </div>

            <motion.div
              animate={{
                opacity:
                  hoveredCard === 'cooking'
                    ? 0.45
                    : 0.2,
              }}
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#ffe7d0]/30
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                relative
                z-10
                flex
                min-h-[620px]
                flex-col
                justify-end
                p-10
                md:p-12
              "
            >

              <div
                className="
                  mb-5
                  inline-flex
                  w-fit
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2
                  text-[11px]
                  tracking-[0.3em]
                  text-white/90
                  backdrop-blur-xl
                "
              >
                ГОТОВИМ ВМЕСТЕ
                
              </div>

              <div className="mb-5 text-7xl">
                🥧
              </div>

              <h2
                className="
                  mb-5
                  text-5xl
                  font-bold
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                  md:text-6xl
                "
              >
                
                Cozy Recipes
              </h2>

              <p
                className="
                  max-w-lg
                  text-lg
                  leading-[1.9]
                  text-white/80
                  md:text-xl
                "
              >
                Атмосферные рецепты
для красивых совместных
вечеров и воспоминаний.
              </p>

            </div>

          </motion.button>

          {/* WORKSHOPS */}

          <motion.button
            whileHover={{
              y: -12,
              scale: 1.015,
            }}
            transition={{
              duration: 0.35,
            }}
            onHoverStart={() => setHoveredCard('workshops')}
            onHoverEnd={() => setHoveredCard(null)}
            onClick={() => setScreen('workshops')}
            className="
              group
              relative
              overflow-hidden
              rounded-[42px]
              text-left
            "
          >

            <div className="absolute inset-0">

              <img
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1400&auto=format&fit=crop"
                alt="Home Workshops"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1d140f]/80 via-[#2a1c15]/35 to-transparent" />

            </div>

            <motion.div
              animate={{
                opacity:
                  hoveredCard === 'workshops'
                    ? 0.45
                    : 0.2,
              }}
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#fff0d8]/30
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                relative
                z-10
                flex
                min-h-[620px]
                flex-col
                justify-end
                p-10
                md:p-12
              "
            >

              <div
                className="
                  mb-5
                  inline-flex
                  w-fit
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2
                  text-[11px]
                  tracking-[0.3em]
                  text-white/90
                  backdrop-blur-xl
                "
              >
                МАСТЕР-КЛАССЫ
              </div>

              <div className="mb-5 text-7xl">
                🕯️
              </div>

              <h2
                className="
                  mb-5
                  text-5xl
                  font-bold
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                  md:text-6xl
                "
              >
                Hand Making
              </h2>

              <p
                className="
                  max-w-lg
                  text-lg
                  leading-[1.9]
                  text-white/80
                  md:text-xl
                "
              >
                Домашний мастер-класс
по созданию уютных
ароматических свечей.
              </p>

            </div>

          </motion.button>

        </div>

      </div>

          </div>

    </motion.div>

  </AnimatePresence>

  )

}