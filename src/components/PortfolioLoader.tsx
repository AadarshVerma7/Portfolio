"use client";

interface PortfolioLoaderProps {
  progress: number;
}

const PortfolioLoader = ({
  progress,
}: PortfolioLoaderProps) => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050706]
      "
    >
      {/* Background texture */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[url('/images/bgImage1.png')]
          bg-cover
          bg-center
          opacity-20
        "
      />

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Decorative glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d6b06f]/5
          blur-[100px]
        "
      />

      {/* Loader content */}

      <div
        className="
          relative
          z-10
          flex
          w-[90%]
          max-w-[500px]
          flex-col
          items-center
        "
      >
        {/* Top label */}

        <div className="mb-10 flex w-full items-center gap-4">
          <div
            className="
              h-px
              flex-1
              bg-linear-to-r
              from-transparent
              to-[#3f9c9c]/50
            "
          />

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-[#3f9c9c]
            "
          >
            Initializing Portfolio
          </p>

          <div
            className="
              h-px
              flex-1
              bg-linear-to-r
              from-[#3f9c9c]/50
              to-transparent
            "
          />
        </div>

        {/* Logo */}

        <div
          className="
            relative
            flex
            h-32
            w-32
            items-center
            justify-center
          "
        >
          {/* Outer circle */}

          <div
            className="
              absolute
              inset-0
              animate-[spin_8s_linear_infinite]
              rounded-full
              border
              border-[#d6b06f]/20
              border-t-[#d6b06f]
            "
          />

          {/* Inner circle */}

          <div
            className="
              absolute
              inset-3
              animate-[spin_5s_linear_infinite_reverse]
              rounded-full
              border
              border-[#3f9c9c]/20
              border-b-[#3f9c9c]
            "
          />

          {/* A */}

          <span
            className="
              font-serif
              text-6xl
              text-[#d6b06f]
              drop-shadow-[0_0_20px_rgba(214,176,111,0.25)]
            "
          >
            A
          </span>
        </div>

        {/* Loading status */}

        <div className="mt-10 w-full">

          <div className="mb-3 flex items-center justify-between">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#d6b06f]/60
              "
            >
              Loading Experience
            </p>

            <p
              className="
                font-mono
                text-[10px]
                tracking-[0.15em]
                text-[#3f9c9c]
              "
            >
              {progress}%
            </p>
          </div>

          {/* Progress track */}

          <div
            className="
              relative
              h-px
              w-full
              overflow-hidden
              bg-[#d6b06f]/15
            "
          >
            {/* Actual progress */}

            <div
              className="
                absolute
                left-0
                top-0
                h-full
                bg-[#d6b06f]
                shadow-[0_0_10px_rgba(214,176,111,0.6)]
                transition-[width]
                duration-500
                ease-out
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

        </div>

        {/* Bottom status */}

        <div className="mt-5 flex items-center gap-2">

          <span
            className="
              h-1
              w-1
              animate-pulse
              rounded-full
              bg-[#3f9c9c]
              shadow-[0_0_6px_#3f9c9c]
            "
          />

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-zinc-600
            "
          >
            Preparing the journey
          </p>

        </div>
      </div>

      {/* Bottom-left decoration */}

      <div
        className="
          absolute
          bottom-8
          left-8
          hidden
          items-center
          gap-3
          md:flex
        "
      >
        <div className="h-px w-10 bg-[#d6b06f]/50" />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-[#d6b06f]/40
          "
        >
          Aadarsh Verma
        </span>
      </div>

      {/* Bottom-right */}

      <span
        className="
          absolute
          bottom-8
          right-8
          hidden
          font-mono
          text-[8px]
          tracking-[0.2em]
          text-[#3f9c9c]/40
          md:block
        "
      >
        SYSTEM / LOADING
      </span>

    </div>
  );
};

export default PortfolioLoader;