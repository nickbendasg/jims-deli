import './Vector.css';
import { useState, useEffect, useRef } from 'react';


export default function Vector({ type, classText }) {


  const xmlns = "http://www.w3.org/2000/svg";
  const height = 24;
  const width = 24;


  let inside = (
    <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} fill="#000000" stroke="#000000">
    </svg>
  );

  classText = classText ? classText : 'testClass';



  switch(type) {

    case 'add':
      return  (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      )
    case 'trash':
      return  (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      )
    case 'minus':
      return  (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      )
    case 'target':
      return  (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="2" y1="12" x2="4" y2="12" />
        </svg>
      )
    case 'rotate':
      return  (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" /><line x1="5.63" y1="7.16" x2="5.63" y2="7.17" /><line x1="4.06" y1="11" x2="4.06" y2="11.01" /><line x1="4.63" y1="15.1" x2="4.63" y2="15.11" /><line x1="7.16" y1="18.37" x2="7.16" y2="18.38" /><line x1="11" y1="19.94" x2="11" y2="19.95" />
        </svg>
      )
    case 'compass':
      return  (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <polyline points="8 16 10 10 16 8 14 14 8 16" /><circle cx="12" cy="12" r="9" /><line x1="12" y1="3" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="21" /><line x1="3" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="21" y2="12" />
        </svg>
      )
    case 'camera':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /><circle cx="12" cy="13" r="3" />
        </svg>
      );
    case 'text':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <line x1="4" y1="20" x2="7" y2="20" /><line x1="14" y1="20" x2="21" y2="20" /><line x1="6.9" y1="15" x2="13.8" y2="15" /><line x1="10.2" y1="6.3" x2="16" y2="20" /><polyline points="5 20 11 4 13 4 20 20" />
        </svg>
      );
    case 'polyline':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><path d="M6.5 17.5l11 -11m-12.5 .5v10m14 -10v10" />
        </svg>
      );
    case 'polygon':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><line x1="5" y1="7" x2="5" y2="17" /><line x1="7" y1="5" x2="17" y2="5" /><line x1="7" y1="19" x2="17" y2="19" /><line x1="19" y1="7" x2="19" y2="17" />
        </svg>
      );
    case 'location':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <circle cx="12" cy="11" r="3" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
      );
    case 'sat':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z" /><path d="M6 10l-3 3l3 3l3 -3" /><path d="M10 6l3 -3l3 3l-3 3" /><line x1="12" y1="12" x2="13.5" y2="13.5" /><path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" /><path d="M15 21a6 6 0 0 0 6 -6" />
        </svg>
      );
    case 'gmap':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <line x1="18" y1="6" x2="18" y2="6.01" /><path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" /><polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" /><line x1="9" y1="4" x2="9" y2="17" /><line x1="15" y1="15" x2="15" y2="20" />
        </svg>
      );
    case 'feather':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4" /><path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4" />
        </svg>
      );
    case 'home':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M3 21l18 0" />
          <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
          <path d="M5 21l0 -10.15" />
          <path d="M19 21l0 -10.15" />
          <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
        </svg>
      );
    case 'golf':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M12 18v-15l7 4l-7 4" /><path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" />
        </svg>
      );
    case 'connection':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" /><path d="M11.683 12.317l5.759 -5.759" /><circle cx="5.5" cy="5.5" r="1.5" /><circle cx="18.5" cy="5.5" r="1.5" /><circle cx="18.5" cy="18.5" r="1.5" /><circle cx="8.5" cy="15.5" r="4.5" />
        </svg>
      );      
    case 'users':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
      );      
    case 'chat':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
        </svg>
      );      
    case 'notification':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" />
        </svg>
      );      
    case 'bug':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M9 9v-1a3 3 0 0 1 6 0v1" /><path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" /><line x1="3" y1="13" x2="7" y2="13" /><line x1="17" y1="13" x2="21" y2="13" /><line x1="12" y1="20" x2="12" y2="14" /><line x1="4" y1="19" x2="7.35" y2="17" /><line x1="20" y1="19" x2="16.65" y2="17" /><line x1="4" y1="7" x2="7.75" y2="9.4" /><line x1="20" y1="7" x2="16.25" y2="9.4" />
        </svg>
      );    
    case 'chevronRight':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <polyline points="9 6 15 12 9 18" />
        </svg>
      );      
    case 'chevronLeft':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <polyline points="15 6 9 12 15 18" />
        </svg>
      );    
    case 'layers': 
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <rect x="7" y="3" width="14" height="14" rx="2" /><path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
        </svg>
      )

        
    case 'edit': 
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
        </svg>
      )
      
    case 'cancel': 
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )
    case 'move':
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}> 
          <polyline transform="matrix(-.65947 .64659 -.66575 -.64049 27.903 11.927)" points="16 4 20 4 20 8"/>
          <line x1="12.013" x2="12.05" y1="14.574" y2="22.297"/>
          <polyline transform="matrix(-.65947 .64659 -.66575 -.64049 27.903 11.927)" points="8 20 4 20 4 16"/>
          <line x1="11.95" x2="11.987" y1="1.7034" y2="9.4258"/>
          <polyline transform="matrix(-.65947 .64659 -.66575 -.64049 27.903 11.927)" points="16 20 20 20 20 16"/>
          <line x1="9.3496" x2="1.3983" y1="12.012" y2="12.049"/>
          <polyline transform="matrix(-.65947 .64659 -.66575 -.64049 27.903 11.927)" points="8 4 4 4 4 8"/>
          <line x1="22.602" x2="14.65" y1="11.951" y2="11.988"/>
        </svg>
      )
    case 'printer': 
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
          <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
          <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
        </svg>
      )
    case 'silverware': 
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
        </svg>
      )
    case 'user': 
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>
      )
    case 'settings': 
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        </svg>
      )
    case 'paperbag': 
      return (
        <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} className={classText}>
          <path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-3a2 2 0 0 1 2 -2z" />
          <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
          <path d="M11 7h2" />
        </svg>
      )
                
  }


  return (
    <svg xmlns={xmlns} height={`${height}px`} viewBox={`0 0 ${height} ${width}`} width={`${width}px`} fill="#000000" stroke="#000000">
    </svg>
  );

};

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>

</svg>