enum sosmedType {
  'whatsapp' = 1,
  'facebook' = 2,
  'email' = 3
}

export interface User {
  _id: string
  fullName: string
  email: string
  password: string
  status?: boolean
  propertyId?: string[]
  createdAt: string
  updatedAt: string
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
  userId: User
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

export type ApiProvinsiResponse = {
  provinsi: [
    {
      id: number
      nama: string
    }
  ]
}

export type ApiKotaKabResponse = {
  id: number
  id_provinsi: string
  nama: string
}

export interface UserInput {
  // inputan dari user
  fullName: string
  title: string
  provinsi: string
  kota: string
  description: string
  isLuas: string
  userId: string
  luas?: string
  panjang?: string
  lebar?: string
  price?: string
  mainPicture: FileList
  nego: boolean
  kontak1?: string
  kontak2?: string
  kontak3?: string
  kontak4?: string
  checkKontak1?: number | string
  checkKontak2?: number | string
  checkKontak3?: number | string
  checkKontak4?: number | string
  userKontak1?: string
  userKontak2?: string
  userKontak3?: string
  userKontak4?: string
}
