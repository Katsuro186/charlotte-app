import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const steps = [
  {
  title: 'Подготовка перед готовкой',
  emoji: '✨',
  text:
    'Перед началом приготовления разложи все ингредиенты на столе, чтобы ничего не искать в процессе.\n\nТебе понадобится:\n• 4 яйца\n• 1 стакан сахара (примерно 180–200 г)\n• 1 стакан муки с небольшой горкой (примерно 140–160 г)\n• 4–5 яблок\n• немного корицы по желанию\n\nТакже заранее подготовь:\n• большую миску\n• миксер\n• лопатку или ложку\n• нож\n• стакан\n• форму для запекания',
  tip:
    'Подготовленные заранее ингредиенты делают готовку спокойнее и намного приятнее ✨',
},

  {
    title: 'Если дома нет весов',
    emoji: '🥄',
    text:
      'Этот рецепт легко готовится без кухонных весов.\n\n• 1 стакан сахара — примерно 10 столовых ложек без горки\n• 1 стакан муки — примерно 8–9 столовых ложек с небольшой горкой\n\nГлавное здесь — не идеальная точность, а аккуратность и спокойствие.',
    tip:
      'Даже без идеальных измерений шарлотка получится вкусной 💖',
  },

  {
    title: 'Подготовь рабочее место',
    emoji: '🧼',
    text:
      'Освободи место на кухонном столе, убери лишние вещи и помой руки.\n\nПодготовь ингредиенты рядом с собой.\nТак готовить будет проще, спокойнее и намного приятнее.',
    tip:
      'Чистое и свободное пространство делает процесс намного уютнее ☕',
  },

  {
    title: 'Подготовка стеклянной формы',
    emoji: '🧈',
    text:
      'Хорошо смажь стеклянную форму сливочным маслом, особенно уголки и бортики.\n\nПосле можно слегка присыпать форму мукой или манкой.\n\nВажно:\nесли форма была в холодильнике — дай ей согреться до комнатной температуры.\nХолодное стекло не любит резкий перепад температуры и может треснуть в горячей духовке.',
    tip:
      'Хорошо подготовленная форма поможет шарлотке легко выйти после выпекания ✨',
  },

  {
    title: 'Разогрев духовки',
    emoji: '🔥',
    text:
      'Включи духовку заранее на 180 градусов в режиме верх и низ.\n\nПока ты будешь готовить тесто — духовка прогреется равномерно.\n\nЭто важно для того, чтобы шарлотка поднялась красиво и пропеклась внутри.',
    tip:
      'Разогретая духовка — один из главных секретов пышной шарлотки 🥧',
  },

  {
    title: 'Подготовка яблок',
    emoji: '🍎',
    text:
      'Хорошо помой яблоки.\n\nКожуру можно оставить — с ней яблоки будут держать форму и дадут более насыщенный вкус.\n\nЕсли хочешь более нежную текстуру — можешь очистить кожуру.\n\nРазрежь яблоки пополам, убери сердцевину и нарежь средними дольками толщиной примерно как палец.\n\nСлишком тонко резать не нужно, иначе яблоки растворятся в тесте.',
    tip:
      'Чем ароматнее яблоки — тем уютнее получится весь вечер 🍎',
  },

  {
    title: 'Подготовка яиц',
    emoji: '🥚',
    text:
      'Разбей 4 яйца в большую глубокую миску.\n\nДелай это аккуратно, чтобы скорлупа не попала внутрь.\n\nЕсли кусочек скорлупы всё же попал — его удобно доставать половинкой скорлупы.',
    tip:
      'Большая миска поможет удобно взбить массу без брызг ✨',
  },

  {
    title: 'Добавление сахара',
    emoji: '🍯',
    text:
      'Высыпь весь сахар к яйцам.\n\nТеперь можно начинать взбивать основу для теста.',
    tip:
      'Сейчас начинается самая воздушная часть рецепта ☁️',
  },

  {
    title: 'Взбивание основы',
    emoji: '☁️',
    text:
      'Взбивай яйца с сахаром миксером примерно 7–10 минут.\n\nНачни со средней скорости, а через минуту переключи на высокую.\n\nМасса должна стать светлой, воздушной и увеличиться примерно в 2–3 раза.\n\nЕсли поднять венчик — смесь должна медленно стекать лентой, а не литься как вода.',
    tip:
      'Чем воздушнее масса — тем нежнее получится шарлотка 💖',
  },

  {
    title: 'Добавление муки',
    emoji: '🥣',
    text:
      'Теперь постепенно добавляй муку небольшими частями.\n\nЛучше всего просеивать её через сито прямо в миску — так тесто получится более воздушным и без комочков.\n\nПосле каждой части аккуратно перемешивай тесто лопаткой снизу вверх.\n\nНе мешай слишком резко или долго — иначе тесто потеряет воздушность.',
    tip:
      'Аккуратные движения сохраняют воздушность теста ✨',
  },

  {
    title: 'Проверка теста',
    emoji: '👀',
    text:
      'Готовое тесто должно быть похоже на густую сметану.\n\nОно должно медленно стекать с лопатки широкой лентой.\n\nЕсли тесто слишком жидкое — добавь ещё 1–2 ложки муки.',
    tip:
      'Правильная консистенция — залог красивой текстуры шарлотки 🧁',
  },

  {
    title: 'Сборка шарлотки',
    emoji: '🧩',
    text:
      'На дно формы выложи примерно половину яблок.\n\nЗатем налей около половины теста — оно должно слегка покрыть яблоки.\n\nПосле выложи оставшиеся яблоки и сверху аккуратно вылей остальное тесто.\n\nНе переживай, если часть яблок будет немного выглядывать — так даже красивее.',
    tip:
      'Сейчас шарлотка начинает выглядеть по-настоящему аппетитно 🍯',
  },

  {
    title: 'Перед духовкой',
    emoji: '✨',
    text:
      'Перед тем как ставить форму в духовку — слегка постучи формой по столу 1–2 раза.\n\nЭто поможет убрать слишком большие пузырьки воздуха внутри теста.',
    tip:
      'Небольшие детали делают результат ещё красивее 💖',
  },

  {
    title: 'Выпекание',
    emoji: '⏳',
    text:
      'Поставь шарлотку в духовку примерно на 45–55 минут при температуре 175 градусов.\n\nОчень важно:\nпервые 30–35 минут духовку не открывай, иначе шарлотка может осесть и потерять пышность.',
    tip:
      'Сейчас кухня начнёт наполняться невероятным ароматом ☕',
  },

  {
    title: 'Проверка готовности',
    emoji: '🔍',
    text:
      'Чтобы проверить готовность — аккуратно проткни пирог деревянной шпажкой, зубочисткой или ножом ближе к центру.\n\nЕсли они выходят сухими без сырого теста — шарлотка готова.',
    tip:
      'Самый приятный момент — понять, что всё получилось ✨',
  },

  {
    title: 'Финальная подача',
    emoji: '💖',
    text:
      'Дай шарлотке остыть примерно 10–15 минут.\n\nПосле можно посыпать её сахарной пудрой.\n\nПодавай с чаем, кофе или шариком ванильного мороженого.\n\nСамое главное — наслаждайтесь этим вечером вместе ✨',
    tip:
      'Такие вечера потом вспоминаются особенно тепло 🌙',
  },
]

const assistantMessages = [
  'Не торопись. Атмосфера — тоже часть рецепта ☕',
  'Сейчас кухня становится особенно уютной ✨',
  'У вас отлично получается 💖',
  'Кажется, это будет очень вкусный вечер 🌙',
]

const achievements = [
  '✨ Получается очень уютно',
  '💖 Это будет вкусный вечер',
  '🍎 Уже выглядит аппетитно',
  '☕ На кухне становится особенно тепло',
  '🌙 Такие вечера запоминаются',
  '🧁 Шарлотка получается прекрасной',
  '💞 Вы отлично справляетесь вместе',
  '✨ Атмосфера сейчас просто волшебная',
  '🍯 Всё идёт именно так, как нужно',
  '💖 Это очень милый момент',
]

type Props = {
  onBack?: () => void
}

export default function InteractiveCharlotte({
  onBack,
}: Props) {

  const [currentStep, setCurrentStep] =
    useState(() => {

      const saved =
        localStorage.getItem(
          'charlotte-current-step'
        )

      return saved
        ? Number(saved)
        : 0

    })

  const [completedSteps, setCompletedSteps] =
    useState<number[]>(() => {

      const saved =
        localStorage.getItem(
          'charlotte-completed-steps'
        )

      return saved
        ? JSON.parse(saved)
        : []

    })

  const [timer, setTimer] =
    useState(() => {

      const saved =
        localStorage.getItem(
          'charlotte-timer'
        )

      return saved
        ? Number(saved)
        : 60 * 60

    })

  const [timerRunning, setTimerRunning] =
    useState(() => {

      return (
        localStorage.getItem(
          'charlotte-timer-running'
        ) === 'true'
      )

    })

  const [showFinalScreen, setShowFinalScreen] =
    useState(() => {

      return (
        localStorage.getItem(
          'charlotte-final-screen'
        ) === 'true'
      )

    })

  const [showAchievement, setShowAchievement] =
    useState(false)

  // =====================================
  // LOCAL STORAGE SAVE
  // =====================================

  useEffect(() => {

    localStorage.setItem(
      'charlotte-current-step',
      String(currentStep)
    )

  }, [currentStep])

  useEffect(() => {

    localStorage.setItem(
      'charlotte-completed-steps',
      JSON.stringify(completedSteps)
    )

  }, [completedSteps])

  useEffect(() => {

    localStorage.setItem(
      'charlotte-timer',
      String(timer)
    )

  }, [timer])

  useEffect(() => {

    localStorage.setItem(
      'charlotte-timer-running',
      String(timerRunning)
    )

  }, [timerRunning])

  useEffect(() => {

    localStorage.setItem(
      'charlotte-final-screen',
      String(showFinalScreen)
    )

  }, [showFinalScreen])

  // =====================================
  // PROGRESS
  // =====================================

  const progress = useMemo(() => {

    return (
      completedSteps.length /
      steps.length
    ) * 100

  }, [completedSteps])

  // =====================================
  // TIMER
  // =====================================

  useEffect(() => {

    let interval: number | undefined

    if (
      timerRunning &&
      timer > 0
    ) {

      interval = window.setInterval(() => {

        setTimer((prev) => prev - 1)

      }, 1000)

    }

    return () => {

      if (interval) {

        clearInterval(interval)

      }

    }

  }, [timerRunning, timer])

  // =====================================
  // ACHIEVEMENT
  // =====================================

  useEffect(() => {

    if (showAchievement) {

      const timeout = setTimeout(() => {

        setShowAchievement(false)

      }, 3500)

      return () => clearTimeout(timeout)

    }

  }, [showAchievement])

  // =====================================
  // FINAL SCREEN SCROLL
  // =====================================

  useEffect(() => {

    if (showFinalScreen) {

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

    }

  }, [showFinalScreen])

  // =====================================
  // FORMAT TIMER
  // =====================================

  const formatTime = (
    seconds: number
  ) => {

    const minutes =
      Math.floor(seconds / 60)

    const secs =
      seconds % 60

    return `${minutes}:${secs
      .toString()
      .padStart(2, '0')}`

  }

  return (

    <div className="relative min-h-screen  overflow-hidden bg-[#f7f2eb] px-5 py-8">
{onBack && (

  <motion.button
    whileHover={{
      x: -2,
      opacity: 1,
    }}
    whileTap={{
      scale: 0.98,
    }}
    onClick={onBack}
    className="
      fixed
      left-7
      top-7
      z-50

      group

      flex
      items-center
      gap-3

      rounded-full

      border
      border-white/50

      bg-white/55
      backdrop-blur-2xl

      px-4
      py-3

      shadow-[0_8px_30px_rgba(120,90,60,0.08)]

      transition-all
      duration-300

      hover:bg-white/75
      hover:shadow-[0_12px_40px_rgba(120,90,60,0.12)]
    "
  >

    <div
      className="
        flex
        h-9
        w-9
        items-center
        justify-center

        rounded-full

        bg-[#f1dcc6]

        text-[15px]
        text-[#8f6545]

        transition-all
        duration-300

        group-hover:-translate-x-[2px]
      "
    >
      ←
    </div>

    <div className="pr-1 text-left">

     <div
  className="
    text-[10px]
    uppercase
    tracking-[0.28em]
    text-[#c69a72]
  "
>
  Cozy Cooking
</div>

<div
  className="
    text-[15px]
    font-medium
    leading-none
    text-[#4b3931]
  "
>
  К рецептам
</div>

    </div>

  </motion.button>

)}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-120px] top-[10%] h-[320px] w-[320px] rounded-full bg-[#f3d8bb] opacity-30 blur-3xl" />

        <div className="absolute right-[-100px] top-[40%] h-[260px] w-[260px] rounded-full bg-[#e8cfc3] opacity-30 blur-3xl" />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-[#ece3d8] bg-white/80 shadow-2xl backdrop-blur-xl"
      >

        <div className="h-2 w-full bg-[#f0e3d5]">

          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            className="h-full bg-gradient-to-r from-[#c79a6b] to-[#e5c6a2]"
          />

        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-[#e7c5a2] via-[#f3dfca] to-[#f8efe7] px-8 py-16 text-center">

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="mb-6 text-[90px]"
          >
            🥧
          </motion.div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#3b2f2f] md:text-6xl">
            Шарлотка для особенного вечера
          </h1>

          <div className="mb-2 flex items-center justify-center gap-5 text-lg text-[#9f7150] md:text-xl">

            <div className="hidden h-px w-16 bg-[#d8b08a] md:block" />

            <div>
              Готовим вместе • шаг за шагом 💖
            </div>

            <div className="hidden h-px w-16 bg-[#d8b08a] md:block" />

          </div>

        </div>

        <div className="px-5 pb-20 pt-10 md:px-8">

          <div className="mb-10 flex items-center justify-center gap-3 flex-wrap">

  {steps.map((step, index) => {

    const isActive =
      currentStep === index

    const isCompleted =
      index <= currentStep

    return (

      <motion.button
        key={index}
        whileHover={{
          scale: 1.15,
        }}
        whileTap={{
          scale: 0.92,
        }}
        animate={{
          scale: isActive
            ? 1.25
            : 1,
        }}
        onClick={() => {

  setCurrentStep(index)

  localStorage.setItem(
    'candle-current-step',
    String(index)
  )

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

}}
        className={`
          relative
          h-4
          w-4
          rounded-full
          transition-all
          duration-300
          ${
            isCompleted
              ? 'bg-[#d09a63]'
              : 'bg-[#ead8c7]'
          }
          ${
            isActive
              ? 'ring-4 ring-[#f3dfca]'
              : ''
          }
        `}
        title={`Шаг ${index + 1}: ${step.title}`}
      >

        {isActive && (

          <motion.div
            layoutId="activeStep"
            className="
              absolute
              inset-0
              rounded-full
              border-2
              border-[#b97d47]
            "
          />

        )}

      </motion.button>

    )

  })}

</div>

          <AnimatePresence mode="wait">

            <motion.div
              key={currentStep}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative overflow-hidden rounded-[36px] border border-[#eadfce] bg-[#fffdfb] p-7 shadow-2xl md:p-10"
            >

              {/* ACHIEVEMENT POPUP */}

              <AnimatePresence>

                {showAchievement && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -30,
                      scale: 0.92,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      scale: 0.92,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="absolute right-6 top-6 z-50 w-[320px] overflow-hidden rounded-[28px] border border-[#f2dcc7] bg-[#fffaf5]/95 shadow-2xl backdrop-blur-2xl"
                  >

                    <div className="relative p-5">

                      <motion.div
                        animate={{
                          opacity: [0.4, 0.8, 0.4],
                          scale: [1, 1.06, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="absolute right-[-20px] top-[-20px] h-24 w-24 rounded-full bg-[#f6d8ba] blur-2xl"
                      />

                      <div className="relative z-10 flex items-start gap-4">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d9a56d] text-2xl text-white shadow-lg">
                          ✨
                        </div>

                        <div className="flex-1">

                          <div className="mb-1 text-[11px] tracking-[0.3em] text-[#bf8a62]">
                            ACHIEVEMENT UNLOCKED
                          </div>

                          <div className="mb-2 text-lg font-semibold leading-snug text-[#4b3832]">

                            {
                              achievements[
                                (
                                  currentStep +
                                  completedSteps.length
                                ) %
                                  achievements.length
                              ]
                            }

                          </div>

                          <div className="text-sm text-[#8f7565]">
                            Вы создаёте по-настоящему уютный вечер 💖
                          </div>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setShowAchievement(false)
                          }
                          className="text-[#b08d76] transition-all hover:scale-110"
                        >
                          ✕
                        </button>

                      </div>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

              {/* TIMER */}

              <div className="mb-10 flex flex-col gap-5 rounded-3xl border border-[#efe4d7] bg-[#fffaf5]/90 px-5 py-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-4">

                  <motion.div
                    animate={
                      timerRunning
                        ? { scale: [1, 1.04, 1] }
                        : {}
                    }
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                    className="text-3xl font-bold text-[#3f312d]"
                  >
                    {formatTime(timer)}
                  </motion.div>

                  <div className="hidden h-8 w-px bg-[#eadbc9] md:block" />

                  <div>

                    <div className="mb-1 text-[10px] tracking-[0.3em] text-[#c1976d]">
                      COZY MODE
                    </div>

                    <div className="text-sm text-[#5a4b43]">

                      {
                        assistantMessages[
                          currentStep %
                          assistantMessages.length
                        ]
                      }

                    </div>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setTimerRunning(!timerRunning)
                  }
                  className="rounded-2xl bg-[#d7b08a] px-5 py-3 text-sm text-white shadow-md transition-all hover:scale-[1.02]"
                >

                  {
                    timerRunning
                      ? 'Пауза'
                      : 'Старт'
                  }

                </button>

              </div>

              <div className="mb-8 text-sm font-bold tracking-[0.25em] text-[#c1976d]">
                ШАГ {currentStep + 1} / {steps.length}
              </div>

              <div className="mb-10 flex items-center gap-5 md:gap-7">

  <motion.div
    animate={{
      rotate: [0, 6, -6, 0],
      y: [0, -4, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="
      flex
      h-20
      w-20
      shrink-0
      items-center
      justify-center
      rounded-[26px]
      bg-[#f6e5d1]
      text-4xl
      shadow-lg
      md:h-24
      md:w-24
      md:text-5xl
    "
  >
    {steps[currentStep].emoji}
  </motion.div>

  <h2
    className="
      max-w-[900px]
      text-4xl
      font-bold
      leading-[1.02]
      tracking-[-0.04em]
      text-[#3f312d]
      md:text-6xl
    "
  >
    {steps[currentStep].title}
  </h2>

</div>

              {/* FORMATTED TEXT */}

<div className="w-full">

  <div className="max-w-[860px]">

    <div
      className="
        rounded-[30px]
        border
        border-[#f3e5d8]
        bg-[#fffaf5]
        px-6
        py-6
        shadow-sm
        md:px-8
        md:py-8
      "
    >

      <div
        className="
          whitespace-pre-line
          text-left
          text-[18px]
          leading-[1.9]
          tracking-[0.003em]
          text-[#554b45]
          md:text-[21px]
        "
      >

        {steps[currentStep].text
          .split('\n')
          .map((line, index) => {

            const trimmed = line.trim()

            if (!trimmed) {

              return (
                <div
                  key={index}
                  className="h-5"
                />
              )

            }

            // SUBTITLE

            if (
              trimmed.endsWith(':')
            ) {

              return (

                <div
                  key={index}
                  className="
                    mb-3
                    mt-6
                    text-[13px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#bf8a62]
                  "
                >
                  {trimmed}
                </div>

              )

            }

            // LIST ITEM

            if (
              trimmed.startsWith('•')
            ) {

              return (

                <div
  key={index}
  className="
    mb-3
    flex
    items-center
    gap-3
    pl-1
  "
>

  <div
    className="
      h-[7px]
      w-[7px]
      shrink-0
      rounded-full
      bg-[#d8a06e]
    "
  />

  <div className="leading-[1.9]">
    {
      trimmed.replace(
        '•',
        ''
      )
    }
  </div>

</div>

              )

            }

            // NORMAL TEXT

            return (

              <p
                key={index}
                className="mb-4"
              >
                {trimmed}
              </p>

            )

          })}

      </div>

    </div>

  </div>

</div>

              {/* DYNAMIC TIP */}

              <div className="mt-10 rounded-[24px] border border-[#f1dfcf] bg-[#fffaf5] px-6 py-5">

                <div className="flex items-start gap-4">

                  <div className="text-3xl">
                    💡
                  </div>

                  <div>

                    <div className="mb-1 text-lg font-semibold text-[#7d5b47]">
                      Маленький совет
                    </div>

                    <div className="text-[#9c7b67]">
                      {steps[currentStep].tip}
                    </div>

                  </div>

                </div>

              </div>

              {/* BUTTONS */}

              <div className="mt-12 flex items-center justify-between">

                <button
                  type="button"
                  onClick={() => {

                    if (currentStep > 0) {

                      setCurrentStep(
                        currentStep - 1
                      )

                    }

                  }}
                  className={`rounded-2xl px-5 py-3 transition-all ${
                    currentStep === 0
                      ? 'cursor-not-allowed bg-[#f3ece4] text-[#c2b2a4]'
                      : 'bg-[#f5ebe0] text-[#5a4b43] hover:bg-[#ead9c7]'
                  }`}
                >
                  ← Назад
                </button>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  type="button"
                  onClick={() => {

                    if (
                      !completedSteps.includes(
                        currentStep
                      )
                    ) {

                      setCompletedSteps((prev) => [

                        ...prev,
                        currentStep,

                      ])

                      setShowAchievement(true)

                    }

                    if (
                      currentStep <
                      steps.length - 1
                    ) {

                      setCurrentStep(
                        currentStep + 1
                      )

                    } else {

                      setShowFinalScreen(true)

                    }

                  }}
                  className="rounded-2xl bg-[#d7b08a] px-7 py-3 text-white shadow-lg"
                >

                  {
                    currentStep ===
                    steps.length - 1
                      ? 'Завершить ✨'
                      : 'Далее →'
                  }

                </motion.button>

              </div>
{/* FINAL SCREEN */}

<AnimatePresence>

  {showFinalScreen && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] overflow-hidden bg-[#1d130f]"
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#2d1d17] via-[#241713] to-[#140d0a]" />

      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-[-120px] top-[-120px] h-[400px] w-[400px] rounded-full bg-[#d9a56d] blur-3xl"
      />

      <motion.div
        animate={{
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-[-160px] right-[-100px] h-[420px] w-[420px] rounded-full bg-[#f4d0af] blur-3xl"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">

        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="w-full max-w-5xl text-center"
        >

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mb-8 text-[90px]"
          >
            💖
          </motion.div>

          <div className="mb-4 text-[12px] tracking-[0.45em] text-[#d7b394]">
            ВЕЧЕР СОХРАНЁН
          </div>

          <h2 className="mx-auto mb-8 max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[#fff4ea] md:text-7xl">

            Первая совместная
            шарлотка ♡

          </h2>

          <p className="mx-auto mb-14 max-w-3xl text-xl leading-[1.9] text-[#f3ddd0] md:text-2xl">

            Самое ценное в этом рецепте —
            не только сама шарлотка.

            А атмосфера,
            которую вы создали вместе.
            Эти маленькие моменты
            потом вспоминаются особенно тепло ✨

          </p>

          {/* MEMORY CARDS */}

          <div className="mb-14 flex flex-wrap items-center justify-center gap-5">

            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-[#f2ddd0] backdrop-blur-xl">
              🧁 Тёплый вечер
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-[#f2ddd0] backdrop-blur-xl">
              ☕ Уютная кухня
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-[#f2ddd0] backdrop-blur-xl">
              🌙 Маленькое воспоминание
            </div>

          </div>

          {/* STATS */}

          <div className="mx-auto mb-14 grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-3">

            <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">

              <div className="mb-2 text-4xl">
                ✨
              </div>

              <div className="mb-1 text-3xl font-bold text-white">
                {completedSteps.length}
              </div>

              <div className="text-sm tracking-[0.2em] text-[#d4b7a2]">
                ШАГОВ ПРОЙДЕНО
              </div>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">

              <div className="mb-2 text-4xl">
                💖
              </div>

              <div className="mb-1 text-3xl font-bold text-white">
                100%
              </div>

              <div className="text-sm tracking-[0.2em] text-[#d4b7a2]">
                УЮТА
              </div>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">

              <div className="mb-2 text-4xl">
                🥧
              </div>

              <div className="mb-1 text-3xl font-bold text-white">
                1
              </div>

              <div className="text-sm tracking-[0.2em] text-[#d4b7a2]">
                ШАРЛОТКА
              </div>

            </div>

          </div>

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            type="button"
            onClick={() =>
              setShowFinalScreen(false)
            }
            className="rounded-full bg-[#f6d6bc] px-10 py-5 text-xl font-medium text-[#4a3428] shadow-2xl transition-all hover:bg-[#ffe7d4]"
          >
            Вернуться ✨
          </motion.button>

        </motion.div>

      </div>

    </motion.div>

  )}

</AnimatePresence>

            </motion.div>

          </AnimatePresence>

        </div>

      </motion.div>

    </div>

  )

}