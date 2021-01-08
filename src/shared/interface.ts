enum sosmedType {
  'whatsapp' = 1,
  'facebook' = 2,
  'email' = 3
}

export interface Property {
  _id: string
  title: string
  description: string
  location: {
    display: string
    provinceId: number
    cityId: number
  }
  mainPicture: string
  price: number
  size: {
    display: string
    wide: string
    long: string
    large: string
  }
  isLarge: boolean
  status: {
    shm: number // 0=not confirm, 1=on process, 2=success
    negotiation: boolean
    soldOut: boolean
  }
  userId: {
    _id: string
    fullName: string
  }
  gallery: [
    {
      imageUrl: string
    }
  ]
  certificate: string[]
  contact: [
    {
      name: string
      type: sosmedType
      url: string
    },
    {
      name: string
      type: sosmedType
      url: string
    },
    {
      name: string
      type: sosmedType
      url: string
    },
    {
      name: string
      type: sosmedType
      url: string
    }
  ]
  createdAt: string
  updatedAt: string
}
