import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function Pacakge() {
  return (
    <>
     <Head>
        <title>Packages page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Album example</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>


  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Card 
        dest="goa"
        star="3"
        Img="https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        about="Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. "
        />
       
       <Card 
        dest="goa"
        star="3"
        Img="https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        about="Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. "
        />

<Card 
        dest="goa"
        star="3"
        Img="https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        about="Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. "
        />

<Card 
        dest="goa"
        star="3"
        Img="https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        about="Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. "
        />

<Card 
        dest="goa"
        star="3"
        Img="https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        about="Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. "
        />

       
      </div>
    </div>
  </div>


        </>
  )
}

export default Pacakge

function Card({dest , star , Img , about}){
    return(
        <>
 <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={Img} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <Image class="card-img-top" src={"https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"} height={40} width={70} />
            </svg>

            <div class="card-body">
            <h3 class="fs-2">{dest}</h3>
              <p class="card-text">{about}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <small class="fw-semibold text-dark">{"star "}</small>
                <small class="text-muted">{" " +star}</small>

                </div>
                <small class="text-muted">book this</small>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}