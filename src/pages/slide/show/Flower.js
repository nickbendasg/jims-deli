
import './Flower.css'


export default function Flower() {
  // style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/jims-deli.appspot.com/o/cdn%2Fslide%2Ftest.png?alt=media&token=2c0a9289-7e0c-4d18-9ee9-b44e7f3abd30')`, width: '100%', height: '100%'
  return (
    <div className="flower">
      <div className="header">
        <div className="sign">
          The Garden Path Florist
        </div>
        <div>
          presents
        </div>
      </div>
      <div className="body">
        <div className="left">
          {/* <div className="up">

          </div> */}
          <div className="down">
            <div className="flowerPhotos">

            </div>
          </div>
        </div>
        <div className="right">
          <div style={{fontSize: '52px'}}>
            time till
            Valentine
          </div>
          <div>
            <span>1</span>
            Day!
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
         Call (860) 747-1099 or Scan QR Code to instantly Order Flowers
        </div>
        <div className='qrcode'>
          
        </div>
      </div>
    </div>
  )
}