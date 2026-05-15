'use client'
import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const steps = [

  {
    title: 'Подготовка перед мастер-классом',
    emoji: '✨',
    text:
      'Перед началом разложите все материалы на столе.\n\nДля одной свечи вам понадобится:\n\n• силиконовая форма\n• соевый воск\n• ароматическое масло\n• жидкий краситель\n• фитиль\n• деревянные палочки\n• кухонный термометр\n• металлическая ёмкость\n• кастрюля для водяной бани\n• весы\n\nКоличество воска зависит от размера формы:\n\n• форма 170 мл → примерно 145–150 г воска\n• форма 190 мл → примерно 160–165 г воска\n• форма 250 мл → примерно 210–220 г воска',
    tip:
      'Лучше заранее всё подготовить — с горячим воском суета особенно неудобна ✨',
  },

  {
    title: 'Подготовка рабочего места',
    emoji: '🧼',
    text:
      'Накройте стол бумагой или полотенцем.\n\nВо время работы воск может случайно капнуть.\n\nОчень важно:\n• поверхность должна быть ровной\n• рядом не должно быть воды\n• форму нельзя ставить на холодный подоконник',
    tip:
      'Спокойное пространство делает весь процесс намного приятнее ☕',
  },

  {
    title: 'Подготовка силиконовой формы',
    emoji: '🕯️',
    text:
      'Проверьте форму перед заливкой.\n\nОна должна быть:\n• чистой\n• сухой\n• без пыли внутри\n\nДаже маленькая капля воды может испортить поверхность свечи.',
    tip:
      'Чистая форма помогает получить красивую поверхность свечи ✨',
  },

  {
    title: 'Установка фитиля',
    emoji: '🧵',
    text:
      'Проденьте фитиль через отверстие формы снизу вверх.\n\nНижнюю часть нужно хорошо зафиксировать, чтобы воск не вытекал.\n\nДля этого используют:\n• силиконовую заглушку\n• клейкую массу\n• термоклей\n\nСверху закрепите фитиль между двумя палочками.\n\nОчень важно:\nфитиль должен стоять ровно по центру.',
    tip:
      'Ровный фитиль — ровное и красивое горение 💖',
  },

  {
    title: 'Подготовка водяной бани',
    emoji: '♨️',
    text:
      'Налейте немного воды в кастрюлю.\n\nСверху поставьте металлическую ёмкость с воском.\n\nВажно:\nдно ёмкости не должно касаться воды.\n\nСоевый воск любит мягкий и медленный нагрев.',
    tip:
      'Чем спокойнее нагрев — тем красивее получится свеча ✨',
  },

  {
    title: 'Плавление воска',
    emoji: '🫠',
    text:
      'Начните плавить воск на среднем огне.\n\nПериодически медленно помешивайте.\n\nОптимальная температура плавления:\n• 70–75°C\n\nОчень важно:\nне перегревайте воск выше 85°C.\n\nИначе:\n• аромат станет слабее\n• могут появиться трещины\n• поверхность получится неровной',
    tip:
      'Температура сильно влияет на качество свечи 🕯️',
  },

  {
    title: 'Добавление красителя',
    emoji: '🎨',
    text:
      'После полного плавления можно добавлять краситель.\n\nПодойдут:\n• жидкий краситель\n• краситель для эпоксидной смолы\n\nДобавляйте совсем понемногу.\n\nДля одной свечи обычно достаточно:\n• 1–3 капель жидкого красителя\nили\n• микрокапли эпоксидного красителя\n\nПосле добавления хорошо перемешайте воск.',
    tip:
      'После застывания цвет станет немного светлее ✨',
  },

  {
    title: 'Добавление аромата',
    emoji: '🌸',
    text:
      'Когда температура воска опустится до 65–70°C — добавьте ароматическое масло.\n\nОптимальное количество:\n\n• 170 мл форма → 10–14 г аромамасла\n• 190 мл форма → 12–16 г\n• 250 мл форма → 15–22 г\n\nПосле добавления перемешивайте смесь примерно 1–2 минуты.',
    tip:
      'Если перелить аромат — свеча может плохо застывать 💖',
  },

  {
    title: 'Подготовка к заливке',
    emoji: '✨',
    text:
      'Перед заливкой убедитесь:\n• фитиль ровный\n• форма чистая\n• цвет однородный\n• аромат хорошо перемешан\n\nИдеальная температура заливки:\n• примерно 58–62°C',
    tip:
      'Слишком горячая заливка часто вызывает трещины ☕',
  },

  {
    title: 'Заливка свечи',
    emoji: '🫗',
    text:
      'Медленно заливайте воск тонкой струйкой.\n\nЛучше лить:\n• спокойно\n• в одну точку\n• без резких движений\n\nВо время заливки не двигайте форму и фитиль.',
    tip:
      'Сейчас свеча начинает выглядеть по-настоящему красиво ✨',
  },

  {
    title: 'Первые минуты застывания',
    emoji: '🌙',
    text:
      'После заливки оставьте свечу в покое.\n\nОчень важно:\n• не переносить форму\n• избегать сквозняков\n• не ставить свечу в холодильник\n\nСвеча должна остывать постепенно при комнатной температуре.',
    tip:
      'Медленное остывание помогает избежать трещин 💖',
  },

  {
    title: 'Полное застывание',
    emoji: '⏳',
    text:
      'Полное застывание обычно занимает:\n• 5–8 часов\n\nНо лучше оставить свечу на ночь.\n\nДоставать свечу из формы можно только когда:\n• она полностью твёрдая\n• форма холодная\n• поверхность матовая',
    tip:
      'Не спешите доставать свечу слишком рано ✨',
  },

  {
    title: 'Финальная обработка',
    emoji: '✂️',
    text:
      'После извлечения свечи подрежьте фитиль.\n\nИдеальная длина:\n• примерно 5–7 мм\n\nЕсли появились небольшие неровности — их можно аккуратно сгладить руками.',
    tip:
      'Маленькие детали делают свечу особенно красивой 🕯️',
  },

  {
    title: 'Первое зажигание',
    emoji: '🔥',
    text:
      'Во время первого использования дайте свече прогореть достаточно долго.\n\nВажно:\nверхний слой воска должен расплавиться почти до краёв.\n\nЭто помогает избежать появления тоннеля внутри свечи.',
    tip:
      'Первое зажигание влияет на всё дальнейшее горение ✨',
  },

  {
    title: 'Финальная атмосфера',
    emoji: '💖',
    text:
      'Теперь можно выключить свет, зажечь свечу и насладиться атмосферой.\n\nСамое ценное здесь — не только сама свеча.\n\nА тот уютный вечер, который вы создали вместе ✨',
    tip:
      'Тёплый свет всегда делает вечер особенным 🌙',
  },

]

const assistantMessages = [
  'Сейчас атмосфера становится особенно уютной ☕',
  'У вас получается очень красиво ✨',
  'Такие вечера потом долго вспоминаются 💖',
  'Кажется, свеча получится идеальной 🌙',
]

const achievements = [
  '✨ Получается очень атмосферно',
  '💖 Свеча выглядит прекрасно',
  '🕯️ Вечер становится уютнее',
  '☕ Атмосфера сейчас особенно тёплая',
  '🌙 Это очень красивый момент',
  '✨ Цвет получается идеально',
  '💞 Вы отлично справляетесь вместе',
  '🕯️ Свеча уже выглядит волшебно',
]

type Props = {
  onBack?: () => void
}

export default function InteractiveCandleWorkshop({
  onBack,
}: Props) {

 const [currentStep, setCurrentStep] =
  useState(() => {

    const saved =
      localStorage.getItem(
        'candle-current-step'
      )

    return saved
      ? Number(saved)
      : 0

})

const [completedSteps, setCompletedSteps] =
  useState<number[]>(() => {

    const saved =
      localStorage.getItem(
        'candle-completed-steps'
      )

    return saved
      ? JSON.parse(saved)
      : []

})

const [timer, setTimer] =
  useState(() => {

    const saved =
      localStorage.getItem(
        'candle-timer'
      )

    return saved
      ? Number(saved)
      : 45 * 60

})

const [timerRunning, setTimerRunning] =
  useState(() => {

    const saved =
      localStorage.getItem(
        'candle-timer-running'
      )

    return saved === 'true'

})

const [showFinalScreen, setShowFinalScreen] =
  useState(() => {

    const saved =
      localStorage.getItem(
        'candle-final-screen'
      )

    return saved === 'true'

})

const [showAchievement, setShowAchievement] =
  useState(false)

const [showWickGuide, setShowWickGuide] =
  useState(() => {

    const saved =
      localStorage.getItem(
        'candle-wick-guide'
      )

    return saved === 'true'

})

const [selectedVolume, setSelectedVolume] =
  useState(() => {

    const saved =
      localStorage.getItem(
        'candle-selected-volume'
      )

    return saved
      ? Number(saved)
      : 190

})

const candleCalculator = useMemo(() => {

  const wax = Math.round(selectedVolume * 0.86)

  const fragranceMin = Math.round(wax * 0.06)
  const fragranceMax = Math.round(wax * 0.1)

  let dye = '1–2 капли'
  let wick = 'Хлопковый фитиль 2–2.5 мм'

  if (selectedVolume === 190) {

    dye = '2–3 капли'
    wick = 'Хлопковый фитиль 2.5–3 мм'

  }

  if (selectedVolume === 250) {

    dye = '3–5 капель'
    wick = 'Хлопковый фитиль 3 мм'

  }

  return {
    wax,
    fragranceMin,
    fragranceMax,
    dye,
    wick,
  }

}, [selectedVolume])

const progress = useMemo(() => {

    return (
      completedSteps.length /
      steps.length
    ) * 100

  }, 
  
  [completedSteps])

  useEffect(() => {

  localStorage.setItem(
    'candle-current-step',
    String(currentStep)
  )

}, [currentStep])

useEffect(() => {

  localStorage.setItem(
    'candle-completed-steps',
    JSON.stringify(completedSteps)
  )

}, [completedSteps])

useEffect(() => {

  localStorage.setItem(
    'candle-timer',
    String(timer)
  )

}, [timer])

useEffect(() => {

  localStorage.setItem(
    'candle-timer-running',
    String(timerRunning)
  )

}, [timerRunning])

useEffect(() => {

  localStorage.setItem(
    'candle-final-screen',
    String(showFinalScreen)
  )

}, [showFinalScreen])

useEffect(() => {

  localStorage.setItem(
    'candle-wick-guide',
    String(showWickGuide)
  )

}, [showWickGuide])

useEffect(() => {

  localStorage.setItem(
    'candle-selected-volume',
    String(selectedVolume)
  )

}, [selectedVolume])

  useEffect(() => {

    let interval: number | undefined

    if (timerRunning && timer > 0) {

      interval = window.setInterval(() => {

        setTimer((prev) => prev - 1)

      }, 1000)

    }

    return () => {

      if (interval) clearInterval(interval)

    }

  }, [timerRunning, timer])

  useEffect(() => {

    if (showAchievement) {

      const timeout = setTimeout(() => {

        setShowAchievement(false)

      }, 3500)

      return () => clearTimeout(timeout)

    }

  }, [showAchievement])

  useEffect(() => {

    if (showFinalScreen) {

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

    }

  }, [showFinalScreen])

  const formatTime = (seconds: number) => {

    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60

    return `${minutes}:${secs
      .toString()
      .padStart(2, '0')}`

  }

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#f7f2eb] px-5 py-8">

      {onBack && (

  <div className="fixed left-7 top-7 z-[200]">

    <motion.button
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.985,
      }}
      onClick={onBack}
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
          К мастер-классам
        </div>

      </div>

    </motion.button>

  </div>

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
            🕯️
          </motion.div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#3b2f2f] md:text-6xl">
            Ароматические свечи
            для уютного вечера
          </h1>

          <div className="mb-2 flex items-center justify-center gap-5 text-lg text-[#9f7150] md:text-xl">

            <div className="hidden h-px w-16 bg-[#d8b08a] md:block" />

            <div>
              Создаём атмосферу вместе 💖
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

          <div className="mb-10 flex flex-col gap-5 rounded-3xl border border-[#efe4d7] bg-[#fffaf5]/90 px-5 py-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
<div className="mb-6 flex justify-end">

  <button
    type="button"
    onClick={() => {

      localStorage.removeItem(
        'candle-current-step'
      )

      localStorage.removeItem(
        'candle-completed-steps'
      )

      localStorage.removeItem(
        'candle-timer'
      )

      localStorage.removeItem(
        'candle-timer-running'
      )

      localStorage.removeItem(
        'candle-final-screen'
      )

      localStorage.removeItem(
        'candle-wick-guide'
      )

      window.location.reload()

    }}
    className="
      rounded-2xl
      border
      border-[#ead7c5]
      bg-white
      px-4
      py-2
      text-sm
      text-[#8c6f5d]
      transition-all
      hover:bg-[#f8f1ea]
    "
  >
    Сбросить workshop ↺
  </button>

</div>
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
<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  className="
    mb-10
    overflow-hidden
    rounded-[34px]
    border
    border-[#eadfce]
    bg-gradient-to-br
    from-[#fffaf5]
    to-[#fff3e8]
    shadow-xl
  "
>

  <div className="border-b border-[#f1e2d4] px-6 py-5 md:px-8">

    <div className="mb-2 text-[11px] tracking-[0.3em] text-[#c09067]">
      CANDLE CALCULATOR
    </div>

    <div className="text-2xl font-bold text-[#3f312d] md:text-3xl">
      Калькулятор свечи ✨
    </div>

  </div>

  <div className="p-6 md:p-8">

    <div className="mb-8 flex flex-wrap gap-3">

      {[170, 190, 250].map((volume) => (

        <button
          key={volume}
          onClick={() => setSelectedVolume(volume)}
          className={`
            rounded-2xl
            px-5
            py-3
            text-sm
            font-medium
            transition-all
            ${
              selectedVolume === volume
                ? 'bg-[#d7b08a] text-white shadow-lg'
                : 'bg-[#f6ece2] text-[#6d584d] hover:bg-[#ead9c7]'
            }
          `}
        >
          {volume} мл
        </button>

      ))}

    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-[28px] border border-[#f1e1d1] bg-white/80 p-5">

        <div className="mb-3 text-4xl">
          🕯️
        </div>

        <div className="mb-1 text-sm tracking-[0.18em] text-[#bf8a62]">
          ВОСК
        </div>

        <div className="text-3xl font-bold text-[#3f312d]">
          {candleCalculator.wax} г
        </div>

      </div>

      <div className="rounded-[28px] border border-[#f1e1d1] bg-white/80 p-5">

        <div className="mb-3 text-4xl">
          🌸
        </div>

        <div className="mb-1 text-sm tracking-[0.18em] text-[#bf8a62]">
          АРОМАТ
        </div>

        <div className="text-3xl font-bold text-[#3f312d]">
          {candleCalculator.fragranceMin}–{candleCalculator.fragranceMax} г
        </div>

      </div>

      <div className="rounded-[28px] border border-[#f1e1d1] bg-white/80 p-5">

        <div className="mb-3 text-4xl">
          🎨
        </div>

        <div className="mb-1 text-sm tracking-[0.18em] text-[#bf8a62]">
          КРАСИТЕЛЬ
        </div>

        <div className="text-2xl font-bold text-[#3f312d]">
          {candleCalculator.dye}
        </div>

      </div>

      <div className="rounded-[28px] border border-[#f1e1d1] bg-white/80 p-5">

        <div className="mb-3 text-4xl">
          🧵
        </div>

        <div className="mb-1 text-sm tracking-[0.18em] text-[#bf8a62]">
          ФИТИЛЬ
        </div>

        <div className="text-2xl font-bold text-[#3f312d]">
          {candleCalculator.wick}
        </div>

      </div>

    </div>

  </div>

</motion.div>

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

                      return (

                        <p
                          key={index}
                          className="mb-4"
                        >
                          {trimmed}
                        </p>

                      )

                    })}
                    {steps[currentStep].title === 'Установка фитиля' && (

  <>

    <button
      onClick={() =>
        setShowWickGuide(
          !showWickGuide
        )
      }
      className="
        mt-8
        rounded-2xl
        bg-[#e7c5a2]
        px-5
        py-3
        text-[#4a3529]
        shadow-md
      "
    >
      Показать как фиксировать фитиль ✨
    </button>

    <AnimatePresence>

      {showWickGuide && (

  <motion.div
    initial={{
      opacity: 0,
      height: 0,
    }}
    animate={{
      opacity: 1,
      height: 'auto',
    }}
    exit={{
      opacity: 0,
      height: 0,
    }}
    className="
      mt-6
      overflow-hidden
      rounded-[32px]
      border
      border-[#ead8c8]
      bg-[#fffdfb]
      p-6
    "
  >

    <div className="mb-5 text-2xl font-bold text-[#4e3b33]">
      Как правильно фиксировать фитиль
    </div>

    <div className="overflow-hidden rounded-[24px] border border-[#efe2d5] bg-[#faf6f2] p-4">

      <img
        src="/wick-guide.png"
        alt="Как фиксировать фитиль"
        className="
          w-full
          rounded-[20px]
          object-cover
        "
      />

    </div>

    <div className="mt-6 space-y-4 text-[17px] leading-[1.8] text-[#6d5a50]">

      <div className="flex items-start gap-3">

        <div className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#d2a06e]" />

        <div>
          Фитиль проходит через отверстие формы
          строго по центру.
        </div>

      </div>

      <div className="flex items-start gap-3">

        <div className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#7c5c49]" />

        <div>
          Снизу форма герметизируется
          силиконовой заглушкой
          или термоклеем —
          чтобы жидкий воск не вытекал.
        </div>

      </div>

      <div className="flex items-start gap-3">

        <div className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#e3c6a7]" />

        <div>
          Сверху фитиль фиксируется
          двумя палочками,
          чтобы он не сместился
          во время заливки.
        </div>

      </div>

      <div className="flex items-start gap-3">

        <div className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#d2a06e]" />

        <div>
          Металлический держатель фитиля
          после застывания свечи
          остаётся внутри у основания.
        </div>

      </div>

    </div>

  </motion.div>

)}

    </AnimatePresence>

  </>

)}

                </div>

              </div>

            </div>

          </div>

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

        </div>

      </motion.div>

      <AnimatePresence>

        {showAchievement && (

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="
              fixed
              right-6
              top-6
              z-50
              rounded-3xl
              bg-white
              px-6
              py-5
              shadow-2xl
            "
          >

            <div className="text-[#5a4b43]">

              {
                achievements[
                  currentStep %
                  achievements.length
                ]
              }

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      <AnimatePresence>

        {showFinalScreen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#1d130f]/90
              px-6
            "
          >

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              className="
                max-w-3xl
                rounded-[40px]
                bg-[#fffaf5]
                p-10
                text-center
                shadow-2xl
              "
            >

              <div className="mb-6 text-7xl">
                🕯️
              </div>

              <h2 className="mb-6 text-5xl font-bold text-[#3f312d]">
                Первая свеча
                своими руками ♡
              </h2>

              <p className="mb-10 text-xl leading-[1.9] text-[#7a685f]">

                Самое ценное здесь —
                не только сама свеча.

                А атмосфера,
                которую вы создали вместе.

                Тёплый свет,
                аромат и спокойный вечер
                останутся в памяти
                особенно надолго ✨

              </p>

              <button
                onClick={() =>
                  setShowFinalScreen(false)
                }
                className="
                  rounded-full
                  bg-[#d7b08a]
                  px-8
                  py-4
                  text-white
                  shadow-xl
                "
              >
                Вернуться ✨
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  )

}