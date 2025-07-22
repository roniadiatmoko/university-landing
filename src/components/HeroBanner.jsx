function HeroBanner(){
    return (
      <section 
        id="hero" 
        className="relative w-full h-[75vh] bg-cover bg-center"
        style={{backgroundImage: "url('/images/card-4.png')"}}
      >
        
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        
        <div className="relative z-10 flex flex-col justify-center h-full text-left text-white container mx-auto ">
            <h1 className="w-fit inline-block text-4xl md:text-5xl font-bold  bg-black bg-opacity-50 px-5 py-4 rounded">Selamat Datang</h1>
            <p className="w-fit inline-block bg-black bg-opacity-50 px-5 pb-5 rounded  text-lg md:text-xl max-w-xl">Sistem Informasi Akademik</p>
        </div>
      </section>  
    );
}

export default HeroBanner;