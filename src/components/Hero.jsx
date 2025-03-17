const Hero = () => {
    return (
      <section className="relative h-screen flex items-center justify-center text-white bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">Welcome to Our Platform</h1>
          <p className="mt-4 text-lg">Providing top-notch services for your needs</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
            Get Started
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  