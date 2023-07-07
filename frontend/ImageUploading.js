// {/* <div>
//                   <ImageUploading
//                     value={images}
//                     onChange={handleClick}
//                     dataURLKey="data_url"
//                     acceptType={["jpg"]}
//                   >
//                     {({
//                       imageList,
//                       onImageUpload,
//                       onImageRemove,
//                       isDragging,
//                       dragProps,
//                     }) => (
//                       <div>
//                         {/* className="w-28 relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-full bg-no-repeat bg-center bg-origin-border bg-cover" */}
//                         {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"> */}
//                         <img
//                           {...dragProps}
//                           style={isDragging ? { background: "#3056D3" } : null}
//                           onClick={onImageUpload}
//                           className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto flex justify-center items-center border-4 border-dashed border-transparent col-span-2 m-2 bg-no-repeat bg-center bg-origin-border bg-cover"
//                           src={
//                             images[0]?.data_url
//                               ? imageList[0]?.data_url
//                               : avatar
//                           }
//                           alt="Avatar"
//                         />
//                         {images[0]?.data_url ? (
//                           <div className="absolute top-36 bottom-0 right-0 left-20">
//                             {/* <button
//                               onClick={() =>
//                                 onImageUpdate(imageList[0]?.data_url)
//                               }
//                               className="inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
//                                     rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
//                                   hover:border-gray-900 hover:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
//                             >
//                               Change Image
//                             </button> */}
//                             <button
//                               onClick={() =>
//                                 onImageRemove(imageList[0]?.data_url)
//                               }
//                               className="rounded-full shadow-lg my-2 px-2 py-2 bg-white border border-transparent"
//                               //   className="inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
//                               //         rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none
//                               //         hover:border-gray-900 hover:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
//                             >
//                               <FaTrashAlt
//                                 style={{ color: "#FF495F", fontSize: "20px" }}
//                               />
//                             </button>
//                           </div>
//                         ) : null}
//                       </div>
//                     )}
//                   </ImageUploading>
//                 </div> */}