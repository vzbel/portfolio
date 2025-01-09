
function Hero(){
    return (
        <section className="flex-1">
            <div className="flex max-w-7xl px-6 py-6 items-center mx-auto h-full">
                <div>
                    <h2 className="mb-5 text-white text-6xl font-semibold">
                        Hello, I'm Gael,
                        <br />
                        Front End Developer
                    </h2>
                    <p className="mb-5 text-slate-300 max-w-xl">
                        I specialize in building sleek, high-performance static sites
                        that look great on any device. From portfolios to landing pages,
                        I bring your ideas to life with clean code and cutting-edge tools.
                        Let's create something exceptional together!
                    </p>
                    <button className="bg-white py-4 px-10 rounded-md">Projects</button>
                </div>
            </div>
        </section>
    );
}

export default Hero
