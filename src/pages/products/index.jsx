import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axiosClient from '@/libraries/axiosClient';
import Image from 'next/image';

function Products({ products }) {

  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        products.length > 0 ? (
          <div className="flex-container stretch">
            {products.map((p) => <Link key={p._id} href={`/products/${p._id}`}>
              <div className="card flashsale_card" style={{ width: '10rem', textAlign: 'center', marginBottom: '50px', marginTop: "20px", height: '370px' }}>
                <Image src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?w=2000" class="card-img-top" width="120" height="150" alt="..." />
                <div class="card-body">
                  <div className='d-flex'>
                    <p class="card-text ">
                      {p.name}</p>
                    <p style={{ color: 'red' }}>{p.discount}%</p>
                  </div>
                  <div className='card_cost d-flex'>
                    <del>{p.price}</del>
                    <p>{p.discountedPrice}</p>
                  </div>
                </div>
              </div>
            </Link>)}
          </div>
        ) : <small>Không có sản phẩm</small>
      }
    </>
  );
}

export default Products;

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
  try {
    const response = await axiosClient.get('/user/products');

    return {
      props: {
        products: response.data.payload,
      },

      // revalidate: 24 * 60 * 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

// getStaticProps - Static-Side Generation
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps(req) {
//   try {
//     const response = await axiosClient.get('/user/products');

//     return {
//       props: {
//         products: response.data.payload,
//       },

//       // revalidate: 10,
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }