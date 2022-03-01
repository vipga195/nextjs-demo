import ImageNext from 'next/image'

const Image = ({ src, layout = "responsive", width = 100, height = 100, ...props }) => {
    return <ImageNext src={src} layout={layout} width={width} height={height} {...props} />
}
export default Image