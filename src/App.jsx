import Sedan from './assets/icon-sedans.svg'
import SUVS from './assets/icon-suvs.svg'
import Luxury from './assets/icon-luxury.svg'

function App() {
  return (
    <div className="h-screen bg-vlgray w-full flex items-center justify-center inset-0">
      
      <div className="grid md:grid-cols-3 bg-white max-w-[300px] md:max-w-[900px]">


        <div className="bg-borange px-10 md:py-12 p-3 flex flex-col items-start md:rounded-l-xl">
          <img src={Sedan} alt="" className='md:mb-8 mb-2'/>
          <h1 className='text-vlgray text-4xl uppercase md:mb-8 mb-2'>Sedans</h1>
          <p className='text-twhite md:mb-24 mb-2'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
          <button className='bg-vlgray text-borange rounded-full px-6 py-3 hover:bg-borange hover:text-vlgray hover:border-[2px] hover:border-twhite cursor-pointer'>Learn More</button>
        </div>

        <div className="bg-dcyan px-10 md:py-12 p-3 flex flex-col items-start">
          <img src={SUVS} alt="" className='md:mb-8 mb-2' />
          <h1 className='text-vlgray text-4xl uppercase md:mb-8 mb-2'>SUVS</h1>
          <p className='text-twhite md:mb-24 mb-2'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
          <button className='bg-vlgray text-dcyan rounded-full px-6 py-3 hover:bg-dcyan hover:text-vlgray cursor-pointer  hover:border-twhite hover:border-[2px]'>Learn More</button>
        </div>

        <div className="bg-vdcyan px-10 md:py-12 p-3 flex flex-col items-start md:rounded-r-xl">
          <img src={Luxury} alt="" className='md:mb-8 mb-2' />
          <h1 className='text-vlgray text-4xl uppercase md:mb-8 mb-2'>Luxury</h1>
          <p className='text-twhite md:mb-24 mb-2'>Cruise in the best car brands without the bloated prices. Enjoy the nehanced comfort of a luxury rental and arrive in style.</p>
          <button className='bg-vlgray text-vdcyan rounded-full px-6 py-3 hover:bg-vdcyan hover:text-vlgray cursor-pointer  hover:border-twhite hover:border-[2px]'>Learn More</button>
        </div>
      </div>

    </div>
  );
}

export default App;
