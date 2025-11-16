import Header from "../../../components/Header";
import Link from "next/link";
import Image from "next/image";

export default function ProblemSolvingPost() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16 px-8 max-w-4xl">
        <div className="font-noto-serif text-gray-800 space-y-8">
          <Link
            href="/thoughts"
            className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
          >
            ← back to thoughts
          </Link>

          <article className="space-y-8">
            <header className="space-y-4">
              <h1 className="text-4xl font-medium text-gray-800">
                problem solving
              </h1>
              <time className="text-sm text-gray-500 italic block">
                November 2025
              </time>
            </header>

            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                When approaching any problem I’ve noticed that progress follows
                the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Pareto_principle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-400 hover:decoration-gray-600"
                >
                  Pareto Principle
                </a>
                . The rule in this context states that 80% of the progress comes
                from 20% of the time spent working (which implies that around
                80% of the time you spend you’re essentially wasting). The funny
                thing about trying to “bend” this curve is that the more
                efficient you get at solving problems your previous “20%” effort
                becomes the new “80%” of time wasted. I suspect that in the
                limit this vanishes (100% of the time spent generates 100% of
                the progress) but—in general—not all time spent working is
                uniform.
              </p>

              <p className="leading-relaxed text-gray-700">
                If you plot something like “intensity/focus/speed” on the x-axis
                and amount of work completed it would look something like this:
              </p>

              <figure className="my-6">
                <div className="w-full max-w-3xl">
                  <Image
                    src="/problem-solving-graph.png"
                    alt="Hypothetical curve of work completed vs. intensity/focus/speed (illustrating the efficient 20% region)."
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-md border border-gray-200"
                    priority
                  />
                </div>
                <figcaption className="mt-2 text-sm text-gray-500 text-center">
                  Work completed vs. intensity/focus/speed — the “efficient 20%”
                  lives where the slope is steepest.
                </figcaption>
              </figure>

              <p className="leading-relaxed text-gray-700">
                This begs the question… what kind of work comprises this
                efficient 20%? What makes this kind of work special? How can I
                do more of this kind of work? Understanding this would—of
                course—give back hours of my life!
              </p>

              <p className="leading-relaxed text-gray-700">
                From what I’ve noticed in the past ~5 months at Meta I think
                I’ve gotten better at identifying the things that generate this
                kind of work. All of the following must be present otherwise
                high quality work (probably) won’t get done:
              </p>

              <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-2">
                1. Intent
              </h2>
              <p className="leading-relaxed text-gray-700">
                Intent is the foundation for productivity. For example, if you
                are solving a difficult problem and you don’t intend on giving
                your best effort then you’re likely going to be uninterested in
                the problem or not appreciate the complexity. This seems simple
                but I think for a majority of the time I’m not truly intending
                on giving my true best effort for each problem. This may be good
                because doing so may actually burn me out but I think being more
                aware of my intent when approaching problems could be much
                better.
              </p>

              <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-2">
                2. Environment
              </h2>
              <p className="leading-relaxed text-gray-700">
                Setting the environment is crucial. To do my best work I must be
                in a setting that is completely quiet with no distractions. I
                believe that this is probably true for most people which is why
                trying to do deep work in an office is next to impossible (I
                just use those days to chat and meet people and do deep work at
                home).
              </p>

              <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-2">
                3. Speed
              </h2>
              <p className="leading-relaxed text-gray-700">
                This might be an underrated reason for deep work. I think having
                a tight feedback loop between input and output is critical to
                sustaining focus for long periods of time. In a way, being able
                to work fast gives you a feeling of control over your machine
                (in a non-maniacal way I promise) which makes you feel really
                good! This means learning key binds for common operations (yes
                I’m talking about vim) as they allow you to shorten the time
                between idea and execution. Every second of delay between those
                two results in fatigue and forgetting which is catastrophic when
                you’re trying to set up important experiments, analyze data and
                generate hypotheses. In a way, you’re always fighting against
                forgetting crucial ideas and insights which means that speed is
                the only way to counteract this force.
              </p>

              <p className="leading-relaxed text-gray-700">
                I like to think about this in the lens of an airplane.
                Technically a plane is always “falling” but it’s going too fast
                to fall which is what makes it fly.
              </p>

              <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-2">
                4. A goal
              </h2>
              <p className="leading-relaxed text-gray-700">
                I want to say that this is the <em>most</em> important, but the
                others are all necessary. Maybe it’s just the caveman in me but
                working towards a goal that’s achievable within the work block
                vs. working with no real tangible goal are completely different
                experiences. The former almost feels like I’m hunting for
                something which is exhilarating while the latter feels like I’m
                toiling away for no reason.
              </p>
              <p className="leading-relaxed text-gray-700">
                This problem came up when I first started working because goals
                became vague. There were no more “tests” or “assignments” to
                complete. These “tests” and “assignments” now were problems that
                spanned over months and months and were insurmountable within a
                couple of days. At first I remember feeling aimless and confused
                since I knew nothing about the tech stack and I had no real
                understanding of what was achievable. However, I noticed that by
                breaking the goals down into week chunks I could break them down
                into day chunks and then work block chunks. This reignited the
                feelings I had before in college where I felt like I was hunting
                down the problem which brought back the feeling of exhilaration!
              </p>

              <p className="leading-relaxed text-gray-700">
                In general, I think being excited by problem solving is super
                super important and I think the things I discuss here maximize
                the chances of being excited for me.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
