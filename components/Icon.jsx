import SVG from 'react-inlinesvg'

const Icon = ({ source, src, link, width = 28, ...props }) =>
  source || src ? <SVG src={source || src} {...props} width={width} link={link} /> : null

export default Icon
