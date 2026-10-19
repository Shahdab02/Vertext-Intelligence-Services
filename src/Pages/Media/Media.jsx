// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowDown, ArrowRight, Play, X } from 'lucide-react'

// const mediaItems = Object.entries(
//   import.meta.glob('../../assets/media/*.mp4', {
//     eager: true,
//     import: 'default',
//     query: '?url',
//   }),
// )
//   .map(([path, src]) => ({
//     number: Number(path.match(/media(\d+)\.mp4$/i)?.[1]),
//     src,
//   }))
//   .sort((first, second) => first.number - second.number)

// const Media = () => {
//   const [activeVideo, setActiveVideo] = useState(null)

//   useEffect(() => {
//     if (!activeVideo) return undefined

//     const closeOnEscape = (event) => {
//       if (event.key === 'Escape') setActiveVideo(null)
//     }

//     document.body.style.overflow = 'hidden'
//     window.addEventListener('keydown', closeOnEscape)

//     return () => {
//       document.body.style.overflow = ''
//       window.removeEventListener('keydown', closeOnEscape)
//     }
//   }, [activeVideo])

//   const openVideo = (video) => setActiveVideo(video)

//   return (
//     <>
//       <section className="relative isolate overflow-hidden bg-slate-950 text-white">
//         <div
//           className="pointer-events-none absolute -right-32 -top-48 -z-10 size-[34rem] rounded-full bg-blue-600/20 blur-3xl"
//           aria-hidden="true"
//         />
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-24">
//           <div>
//             <p className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
//               <span className="size-1.5 rounded-full bg-blue-300" />
//               Vertex video library
//             </p>
//             <h1 className="mt-6 max-w-2xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
//               Media,
//               <span className="block text-blue-400">in motion.</span>
//             </h1>
//             <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
//               Explore the video collection from Vertex Intelligence Service. Choose a film to watch.
//             </p>
//             <div className="mt-9 flex flex-wrap items-center gap-4">
//               <a
//                 href="#video-library"
//                 className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
//               >
//                 Explore the films <ArrowDown className="size-4" />
//               </a>
//               <span className="text-sm text-slate-400">
//                 {mediaItems.length} {mediaItems.length === 1 ? 'video' : 'videos'}
//               </span>
//             </div>
//           </div>

//           {mediaItems[0] && (
//             <button
//               type="button"
//               onClick={() => openVideo(mediaItems[0])}
//               aria-label={`Play featured video ${String(mediaItems[0].number).padStart(2, '0')}`}
//               className="group relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-left shadow-2xl shadow-blue-950/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 sm:min-h-[390px]"
//             >
//               <div className="absolute -right-12 -top-16 size-72 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" aria-hidden="true" />
//               <div className="absolute -right-1 -top-5 size-52 rounded-full border border-white/10" aria-hidden="true" />
//               <div className="absolute -bottom-36 -left-20 size-80 rounded-full bg-blue-600/20 blur-3xl" aria-hidden="true" />
//               <div className="relative flex min-h-[300px] flex-col justify-between p-7 sm:min-h-[390px] sm:p-9">
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Featured video</span>
//                   <span className="text-sm font-medium text-white/60">01 / {String(mediaItems.length).padStart(2, '0')}</span>
//                 </div>
//                 <div>
//                   <span className="mb-5 flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-all group-hover:scale-105 group-hover:bg-blue-600">
//                     <Play className="ml-1 size-6 fill-current" />
//                   </span>
//                   <p className="font-serif text-3xl font-semibold sm:text-4xl">Watch the film</p>
//                   <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
//                     Play video 01 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
//                   </p>
//                 </div>
//               </div>
//             </button>
//           )}
//         </div>
//       </section>

//       <section id="video-library" className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-9 flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Watch & discover</p>
//               <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl">The video library</h2>
//             </div>
//             <p className="max-w-md text-sm leading-6 text-slate-600">
//               Select any film to watch it in a focused, full-size player.
//             </p>
//           </div>

//           {mediaItems.length > 0 ? (
//             <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//               {mediaItems.map((video) => {
//                 const number = String(video.number).padStart(2, '0')

//                 return (
//                   <button
//                     key={video.number}
//                     type="button"
//                     onClick={() => openVideo(video)}
//                     aria-label={`Play video ${number}`}
//                     className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
//                   >
//                     <span className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800">
//                       <span className="absolute -right-10 -top-16 size-48 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
//                       <span className="absolute -bottom-20 -left-10 size-48 rounded-full bg-blue-500/15 blur-2xl" aria-hidden="true" />
//                       <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/40 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white/80 backdrop-blur">
//                         FILM {number}
//                       </span>
//                       <span className="relative flex size-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-all group-hover:scale-110 group-hover:bg-blue-600">
//                         <Play className="ml-0.5 size-4 fill-current" />
//                       </span>
//                     </span>
//                     <span className="flex items-center justify-between gap-4 p-5">
//                       <span>
//                         <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Vertex Intelligence</span>
//                         <span className="mt-1 block font-semibold text-slate-900">Video {number}</span>
//                       </span>
//                       <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
//                         <Play className="size-3.5 fill-current" />
//                       </span>
//                     </span>
//                   </button>
//                 )
//               })}
//             </div>
//           ) : (
//             <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
//               No videos are available right now. Please check back soon.
//             </p>
//           )}
//         </div>
//       </section>

//       <section className="px-5 py-14 sm:px-8 sm:py-16">
//         <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-blue-50 p-7 sm:flex-row sm:items-center sm:p-10">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Need more information?</p>
//             <h2 className="mt-2 font-serif text-2xl font-semibold text-slate-950 sm:text-3xl">Let’s talk about your enquiry.</h2>
//             <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
//               Speak with our team directly and confidentially.
//             </p>
//           </div>
//           <Link
//             to="/contact"
//             className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
//           >
//             Contact our team <ArrowRight className="size-4" />
//           </Link>
//         </div>
//       </section>

//       {activeVideo && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm sm:p-8"
//           onClick={() => setActiveVideo(null)}
//           role="presentation"
//         >
//           <div
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="media-dialog-title"
//             className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">Vertex Intelligence</p>
//                 <h2 id="media-dialog-title" className="mt-1 text-sm font-semibold text-white sm:text-base">
//                   Video {String(activeVideo.number).padStart(2, '0')}
//                 </h2>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setActiveVideo(null)}
//                 aria-label="Close video player"
//                 className="flex size-10 shrink-0 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
//               >
//                 <X className="size-5" />
//               </button>
//             </div>
//             <video
//               key={activeVideo.number}
//               src={activeVideo.src}
//               controls
//               autoPlay
//               playsInline
//               className="aspect-video w-full bg-black"
//             >
//               Your browser does not support video playback.
//             </video>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Media





import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Clapperboard,
  Film,
  Play,
  ShieldCheck,
  X,
  Volume2,
  Maximize2,
} from "lucide-react";

// Automatically load media1.mp4, media2.mp4, etc.
const mediaItems = Object.entries(
  import.meta.glob("../../assets/media/*.mp4", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .map(([path, src]) => ({
    number: Number(path.match(/media(\d+)\.mp4$/i)?.[1]),
    src,
  }))
  .filter((item) => Number.isFinite(item.number))
  .sort((a, b) => a.number - b.number);

// Animation settings
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.15 };

const VideoPreview = ({ src, className = "" }) => {
  const videoRef = useRef(null);

  const handleEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  };

  const handleLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`h-full w-full object-cover ${className}`}
    />
  );
};

const VideoCard = ({ video, index, onOpen }) => {
  const number = String(video.number).padStart(2, "0");

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      onClick={() => onOpen(video)}
      className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
        <VideoPreview
          src={video.src}
          className="transition-transform duration-700 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20" />

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/20 bg-slate-950/55 px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            Media {number}
          </span>
        </div>

        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 p-2 text-white backdrop-blur-md">
          <ArrowUpRight size={15} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-600">
            <Play size={23} fill="currentColor" className="ml-1" />
          </span>
        </div>

        <div className="absolute bottom-4 left-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
            Vertex Intelligence
          </p>
          <p className="mt-1 text-sm font-medium text-white">
            Watch video {number}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            Video Collection
          </p>
          <h3 className="mt-1 font-serif text-xl font-semibold text-slate-950">
            Featured Media {number}
          </h3>
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
          <ArrowRight size={17} />
        </span>
      </div>
    </motion.button>
  );
};

const Media = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeVideo]);

  const featured = mediaItems[0];

  return (
    <main className="overflow-hidden bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#050d1c] text-white lg:min-h-[760px]">
        {/* Cinematic background */}
        {featured && (
          <div className="absolute inset-0 -z-20">
            <video
              src={featured.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover object-[65%_center] opacity-75"
            />
          </div>
        )}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050d1c]/75 via-[#050d1c]/45 to-[#050d1c]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050d1c]/55 via-transparent to-[#050d1c]/10" />

        {/* Decorative lines */}
        <div className="pointer-events-none absolute inset-0 mx-auto max-w-7xl border-x border-white/[0.04]" />
        <div className="pointer-events-none absolute right-[20%] top-0 hidden h-full w-px bg-white/[0.04] lg:block" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:min-h-[760px]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <span className="h-px w-10 bg-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300">
                Vertex Intelligence Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[88px]"
            >
              The Story
              <br />
              Behind the
              <br />
              <span className="italic text-blue-400">Investigation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Step inside the world of professional intelligence. Explore our
              media collection and discover the perspective behind investigative
              work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#video-library"
                className="inline-flex items-center gap-3 rounded-md bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
              >
                Explore Media Library
                <ArrowDownRight size={18} />
              </a>

              {featured && (
                <button
                  onClick={() => setActiveVideo(featured)}
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-blue-400 group-hover:bg-blue-600">
                    <Play size={16} fill="currentColor" />
                  </span>
                  Watch Featured Film
                </button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom hero strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#071329]/70 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-blue-400" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
                Professional Intelligence Services
              </span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Media Archive / {String(mediaItems.length).padStart(2, "0")} Films
            </span>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                Our Media
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              A closer look at
              <br />
              <span className="italic text-blue-700">intelligence.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg leading-9 text-slate-600">
              Investigation is about observation, precision, and understanding
              the details that matter. Our media library offers a visual
              introduction to Vertex Intelligence Service and the world of
              professional investigative solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-slate-200 pt-7">
              <div className="flex items-center gap-3">
                <Film size={21} className="text-blue-700" />
                <span className="text-sm font-semibold text-slate-800">
                  Video Archive
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck size={21} className="text-blue-700" />
                <span className="text-sm font-semibold text-slate-800">
                  Professional Approach
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED VIDEO ================= */}
      {featured && (
        <section className="bg-[#f5f7fb] px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                  Editor's Selection
                </p>
                <h2 className="font-serif text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Featured Film
                </h2>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Vertex / Media 01
              </span>
            </div>

            <motion.button
              type="button"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.7 }}
              onClick={() => setActiveVideo(featured)}
              className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950 text-left shadow-2xl shadow-slate-900/15 sm:aspect-[21/9]"
            >
              <VideoPreview
                src={featured.src}
                className="transition-transform duration-700 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

              <span className="absolute left-5 top-5 rounded-md border border-white/20 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:left-8 sm:top-8">
                Featured Presentation
              </span>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 sm:h-24 sm:w-24">
                  <Play size={30} fill="currentColor" className="ml-1" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 sm:p-10">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Vertex Intelligence Service
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-white sm:text-4xl">
                    Inside the World of Intelligence
                  </h3>
                </div>

                <span className="hidden items-center gap-2 text-sm font-semibold text-white sm:flex">
                  Watch Film <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.button>
          </div>
        </section>
      )}

      {/* ================= MEDIA LIBRARY ================= */}
      <section
        id="video-library"
        className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-wrap items-end justify-between gap-6"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-blue-600" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                  Explore the Archive
                </p>
              </div>

              <h2 className="font-serif text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Our Media <span className="italic text-blue-700">Library.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Explore our collection of videos and presentations. Select a
                film to watch in our cinematic player.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3">
              <Clapperboard size={17} className="text-blue-700" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700">
                {mediaItems.length} Available Videos
              </span>
            </div>
          </motion.div>

          {mediaItems.length ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {mediaItems.map((video, index) => (
                <VideoCard
                  key={video.number}
                  video={video}
                  index={index}
                  onOpen={setActiveVideo}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-14 text-center">
              <Film size={36} className="mx-auto text-slate-400" />
              <p className="mt-4 text-slate-600">
                Our media collection will be available soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#071329] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                Confidential Consultation
              </p>

              <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Every detail matters.
                <br />
                <span className="italic text-blue-400">
                  Let's discuss yours.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Looking for professional investigative assistance? Connect with
                our team to discuss your enquiry privately and explore the next
                steps.
              </p>
            </motion.div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-5 rounded-md bg-blue-600 px-8 py-5 text-sm font-semibold text-white transition-all hover:bg-blue-500"
            >
              Contact Our Team
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020611]/95 p-3 backdrop-blur-xl sm:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label="Video player"
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-[#0a1427] shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                    Vertex Intelligence Service
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-white">
                    Media Film {String(activeVideo.number).padStart(2, "0")}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close video"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-red-400 hover:bg-red-500"
                >
                  <X size={20} />
                </button>
              </div>

              <video
                key={activeVideo.src}
                src={activeVideo.src}
                controls
                autoPlay
                playsInline
                className="aspect-video max-h-[75vh] w-full bg-black object-contain"
              >
                Your browser does not support video playback.
              </video>

              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Volume2 size={15} />
                  Use player controls for audio
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Maximize2 size={15} />
                  Fullscreen available
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Media;
