const url = 'http://192.168.39.124:5001'

export const getHotels = async () => {
    try {
        const response = await fetch(`${url}/hotels`)
        const responseJson = await response.json()
        return responseJson.hotels
    } catch (error) {
        console.error(error)
    }
}