export default function Home() {
  const info = [
    {
      command: "cat about.txt",
      output: "I'm currently studying Computer Science at the University of Guelph with a minor in Mathematics. " +
        "My main interest lies in the vast world of software development and its intricacies. " +
        "I love solving complex problems, exploring new technologies, and strengthing my skillset. " +
        "Aside from programming, I also spend some time playing many video games"
    }
  ]

  return (
    <section id="about" className="max-w-[600px] w-[600px] mx-auto py-10">
      <div className="text-lg bg-slate-300 text-slate-900 dark:bg-slate-700 dark:text-slate-200 rounded-lg">
        <div className="rounded-t-lg text-center py-1 text-base bg-slate-700 text-slate-200 dark:bg-slate-300 dark:text-slate-900">faisal@desktop:~</div>
        <ul className="font-mono p-8">
          {info.map((ele, i) => (
            <li className="my-4" key={i}>
              <div><span className="font-bold">faisal@desktop:~$ </span>{ele.command}</div>
              <p>{ele.output}</p>
            </li>
          ))}
            <li className="my-4">
              <div><span className="font-bold">faisal@desktop:~$ </span></div>
            </li>
        </ul>
      </div>
    </section>
  )
}