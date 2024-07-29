import React from 'react'
import download from '../assets/Download.png'

const Content = () => {
  return (
    <div className="mt-5">
      <div>
        {/* heading content */}
        <div className=" ">
          <h2 className="text-bold  text-4xl  font-sans flex justify-center">What is <span className="bg-blue-800 text-white font-semibold">OPTOMETRY</span> </h2>
          <p className="flex justify-center mx-44 mt-5 font-sans py-2  text-[13px ] text-semibold">
            The World Council of Optometry (WCO) defines Optometry is a healthcare profession that is autonomous, educated, and regulated (licensed or registered),
            and optometrists are the primary healthcare practitioners of the eye and visual system who provide comprehensive eye and vision care,
            which includes refraction and dispensing, detection/diagnosis and management of disease in the eye,
            and the rehabilitation of conditions of the visual
            system
          </p>
        </div>

        <div className="mt-16 mb-24   ">
          <div className="flex justify-center  ">
            {/* body content text */}
            <div className="">  {/* main div of the content */}
              <div className=" w-3/4 mx-48">
                <p className="mb-8">
                  The Course, Optometry is an innovative and multidisciplinary programme in Medical field based on human needs and is structured to make educational
                  sense to students and to develop skills for immediate employability in health industry.
                </p>
                <p className="mb-8">
                  Our aim is to provide vision care services to the community at a very minimum cost & thereby play a
                  major role in eradicating preventable blindness from the society.
                </p>
                <p className="mb-8">
                  We started as a dream project, when a group of like minded eye care professionals decided to create an institution to ensure a deep and lasting impact on the ongoing war against blindness in India.
                  There is a desperate need for a proper comprehensive eye care examination and Nethra institute of optometry has
                  been dedicated to creating well trained and highly competent optometrists in the country to accomplish eradicating avoidable blindness.
                </p>
                <p className="mb-8">
                  We are purely a devoted optometry institute and are led by a team of experienced optometrists and ophthalmologists.
                  We would sincerely like to thank our well wishers who have supported us creating
                  an institute where motivated students and dedicated faculties create a wonderful optometric atmosphere.
                </p>


              </div>
            </div>
            {/*download box */}
            <div className=" mr-72">
              <div className="bg-white w-96 h-[560px] border border-slate-600 rounded-2xl">
                <div className="">
                  <h5 className="px-10 py-5  text-2xl ">Application</h5>
                  <img src={download} alt="" className="px-10 py-2 w-2/4 " />
                  <h4 className="px-10  text-xl">News & Events</h4>
                  {/*Moving tag */}
                  <div className="overflow-hidden whitespace-nowrap px-28 my-12">
                    <div className="inline-block animate-marquee">
                      Addmission Open for 2023-2024
                      <p>Online Application Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}


export default Content