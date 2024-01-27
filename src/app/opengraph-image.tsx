import { ImageResponse } from 'next/og'
import Home from './page'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'No.'
export const size = {
    width: 1191,
    height: 1000,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    // Font
    const interSemiBold = fetch(
        new URL('./Inter-SemiBold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(<Home />, {
        ...size,
        fonts: [
            {
                name: 'Inter',
                data: await interSemiBold,
                style: 'normal',
                weight: 400,
            },
        ],
    })
}