import React from 'react'

function BuildingTomorrow() {
  return (
  <section className="container mx-auto flex flex-col items-center justify-center h-auto min-h-screen  -mt-24 md:-mt-36 lg:-mt-44 xl:-mt-56">
  <div className=" text-center">
    <h2 className="text-3xl font-bold text-primary">BUILDING TOMORROW WITH</h2>
    <h3 className="text-4xl font-extrabold text-primary mt-4">FEARLESS ENTREPRENEURS</h3>
    <p className="text-muted-foreground mt-2">
      There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
      {[
        {
          imgSrc: "https://openui.fly.dev/openui/100x100.svg?text=👤",
          title: "INNOVATION",
          description: "Cutting-edge solutions that redefine what's possible and unlock new growth.",
        },
        {
          imgSrc: "https://openui.fly.dev/openui/100x100.svg?text=💬",
          title: "INCEPTION",
          description: "Ideas that spark change and set the foundation for future success.",
        },
        {
          imgSrc: "https://openui.fly.dev/openui/100x100.svg?text=📋",
          title: "INVESTMENT",
          description: "This description highlights the role of investment in supporting growth and achieving goals.",
        },
        {
          imgSrc: "https://openui.fly.dev/openui/100x100.svg?text=⏰",
          title: "IPO",
          description: "This highlights the significance of an IPO in transitioning a company to the public market.",
        },
        {
          imgSrc: "https://openui.fly.dev/openui/100x100.svg?text=⏰",
          title: "IMPACT",
          description: "This emphasizes the focus on creating significant and positive outcomes.",
        },
      ].map(({ imgSrc, title, description }) => (
        <div
          key={title}
          className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center w-full"
        >
          <img
            alt={title}
            src={imgSrc}
            className="w-16 h-16 mb-4 mx-auto"
          />
          <h4 className="text-lg font-semibold text-primary">{title}</h4>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default BuildingTomorrow