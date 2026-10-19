import investigationRoom from '../../assets/background-dect.webp'
import featuredVideo from '../../assets/media/media1.mp4'

const VideoBackground = ({ className = '' }) => (
  <video
    aria-hidden="true"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster={investigationRoom}
    className={`pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover ${className}`}
  >
    <source src={featuredVideo} type="video/mp4" />
  </video>
)

export default VideoBackground
