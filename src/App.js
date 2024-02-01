import './App.css';
import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { usePDF } from 'react-to-pdf';



function App() {

  const { targetRef } = usePDF({ filename: 'page.pdf' });

  const [JerseyCount, setJerseyCount] = useState([])

  useEffect(() => {
    const n = Array.from({ length: 500 }, (_, index) => index + 1);
    setJerseyCount(n);



  }, [])
  return (
    <div className="App" ref={targetRef}  >
      {JerseyCount.map((index, item) => {
        return (
          <div className='flex justify-center items-center'>
            <div ref={targetRef} key={index} className='text-xl gap-80 h-[100vh] flex items-center flex-col justify-center  '>
              <div>
                {/* <h1 className='text-4xl pb-16'>Student Name</h1> */}
                <div className='flex items-center pt-4 gap-10 justify-center' >
                  <h1 className='text-[210px] font-bold'>{(index < 10) ? '00' + index : (index < 100) ? '0' + index : index} </h1>
                  <div className='flex flex-row-reverse justify-center'>
                    <QRCode className='border-4 border-black p-2 mt-2' size={150} value={index.toString()} />
                  </div>
                    {/* <h1 className='rotate-90 flex text-sm pb-6 items-end'>GNDEC ATHLETIX</h1> */}
                </div>
                    <h1 className='text-sm opacity-40'>GNDEC ATHLETIX</h1>
              </div>

              <div>
                {/* <h1 className='text-4xl pb-16'>Student Name</h1> */}
                <div className='flex items-center pt-4 gap-10 justify-center' >
                  <h1 className='text-[210px] font-bold'>{(index < 10) ? '00' + index : (index < 100) ? '0' + index : index} </h1>
                  <div className='flex flex-row-reverse justify-center'>
                    <QRCode className='border-4 border-black p-2 mt-2' size={150} value={index.toString()} />
                  </div>
                </div>
                    <h1 className='text-sm opacity-40'>GNDEC ATHLETIX</h1>
              </div>

            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
