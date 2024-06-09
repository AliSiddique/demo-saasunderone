import {
    BrainCogIcon,
    PackageIcon,
    ThumbsUpIcon,
    TrophyIcon,
    UsersIcon,
    ZapIcon,
  } from "lucide-react";
  
  export default function Feature() {
    return (
      <>
        {/* Icon Blocks */}
        <div className="container py-24 lg:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
              <div className="space-y-6 lg:space-y-10">
                {/* Icon Block */}
                <div className="flex">
                  <BrainCogIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Creative minds
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We choose our teams carefully. Our people are the secret to
                      great work.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <PackageIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Effortless updates
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      Benefit from automatic updates to all boards any time you
                      need to make a change to your website.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <ZapIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Strong empathy
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We&apos;ve user tested our own process by shipping over 1k
                      products for clients.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
              {/* End Col */}
              <div className="space-y-6 lg:space-y-10">
                {/* Icon Block */}
                <div className="flex">
                  <TrophyIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Conquer the best
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We stay lean and help your product do one thing well.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <UsersIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Designing for people
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We actively pursue the right balance between functionality
                      and aesthetics, creating delightful experiences.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Simple and affordable
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      From boarding passes to movie tickets, there&apos;s pretty
                      much nothing you can&apos;t do.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </>
    );
  }
  