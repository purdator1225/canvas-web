import MapRoutes from '@/components/maproutes'
import React from 'react'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'
import { useEffect } from 'react'


gsap.registerPlugin(DrawSVGPlugin)

function TestSVG() {



    useEffect(() => {
        let context = gsap.context(() => {
          
    
          gsap.fromTo(
            "#wm-us-path",
            { drawSVG: "100% 100%" },
            { drawSVG: "0% 100%", duration: 5, repeat: -1, }
          );

        }) 

    },[])

  return (
    <div className='relative w-full h-[900px] bg-[yellow]'>

        <MapRoutes width={"w-[600px]"} height={"h-[720px]"}/>
    </div>
  )
}

export default TestSVG;