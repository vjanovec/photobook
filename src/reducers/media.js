import { 
    IG_USER_MEDIA,
    IG_USER_MEDIA_ERROR,
    GALLERY_MEDIA,
    GALLERY_MEDIA_ERROR,
    SELECT_PHOTO
} from '../actions/types';

const initialState = {
    media: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_f8963f46-a428-44ab-9e5f-9d01214cf8c1?alt=media&token=43cc9bc0-caba-4d26-b3c8-fabbdec5ea38',
          id: 'f8963f46-a428-44ab-9e5f-9d01214cf8c1',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_f8963f46-a428-44ab-9e5f-9d01214cf8c1',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_f8963f46-a428-44ab-9e5f-9d01214cf8c1_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_f8963f46-a428-44ab-9e5f-9d01214cf8c1_200x200?alt=media&token=244efa56-612c-48a5-b4ec-2612bce983f5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_cfe0fe0e-f501-4430-98fe-0b58da5acd0e?alt=media&token=1a8c02cb-1960-4c52-bb60-9ebf60126dd1',
          id: 'cfe0fe0e-f501-4430-98fe-0b58da5acd0e',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_cfe0fe0e-f501-4430-98fe-0b58da5acd0e',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_cfe0fe0e-f501-4430-98fe-0b58da5acd0e_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_cfe0fe0e-f501-4430-98fe-0b58da5acd0e_200x200?alt=media&token=93d0a623-6453-4ec1-b2e8-8651516d5c40'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_79d686d0-dcb5-4cdd-a55d-94b65abdc5cf?alt=media&token=1a72a618-9a85-48b6-b7cb-8ff62b1fa56a',
          id: '79d686d0-dcb5-4cdd-a55d-94b65abdc5cf',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_79d686d0-dcb5-4cdd-a55d-94b65abdc5cf',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_79d686d0-dcb5-4cdd-a55d-94b65abdc5cf_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_79d686d0-dcb5-4cdd-a55d-94b65abdc5cf_200x200?alt=media&token=2f68ff66-3b41-480e-806a-3f97ddd0c7cc'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_ecaa063e-a1ef-48aa-baec-e345bca686e7?alt=media&token=94fc7678-9755-4191-8f49-6a69ed71c456',
          id: 'ecaa063e-a1ef-48aa-baec-e345bca686e7',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_ecaa063e-a1ef-48aa-baec-e345bca686e7',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_ecaa063e-a1ef-48aa-baec-e345bca686e7_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_ecaa063e-a1ef-48aa-baec-e345bca686e7_200x200?alt=media&token=0fb052d1-98e3-4c83-9729-8c53a8f9357a'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_82b0bacb-e6b4-4ca6-a351-b4a3ae787b43?alt=media&token=b5414cc2-9ba2-49bd-98cf-1357bff2d31d',
          id: '82b0bacb-e6b4-4ca6-a351-b4a3ae787b43',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_82b0bacb-e6b4-4ca6-a351-b4a3ae787b43',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_82b0bacb-e6b4-4ca6-a351-b4a3ae787b43_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_82b0bacb-e6b4-4ca6-a351-b4a3ae787b43_200x200?alt=media&token=3f0203ca-8fce-48f0-9552-f69356081cff'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_841efd1d-7ec8-405f-a85e-bbab5d39bb12?alt=media&token=f04a7157-164b-481d-9739-3631cdee90fd',
          id: '841efd1d-7ec8-405f-a85e-bbab5d39bb12',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_841efd1d-7ec8-405f-a85e-bbab5d39bb12',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_841efd1d-7ec8-405f-a85e-bbab5d39bb12_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_841efd1d-7ec8-405f-a85e-bbab5d39bb12_200x200?alt=media&token=a41a6983-7225-4e3b-86e8-b1669c6b9502'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_0431539e-aad3-4879-b0b8-e94838d308e3?alt=media&token=7d04047b-2a3d-4250-92bd-716b3cb0edbb',
          id: '0431539e-aad3-4879-b0b8-e94838d308e3',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_0431539e-aad3-4879-b0b8-e94838d308e3',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_0431539e-aad3-4879-b0b8-e94838d308e3_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_0431539e-aad3-4879-b0b8-e94838d308e3_200x200?alt=media&token=18585b96-4d26-4398-a1ff-9816c328e4ce'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_9ce253bd-05fe-4b79-89b8-cc5cd1560194?alt=media&token=fe7cdb32-54ec-4dc1-a862-9d816d879791',
          id: '9ce253bd-05fe-4b79-89b8-cc5cd1560194',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_9ce253bd-05fe-4b79-89b8-cc5cd1560194',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_9ce253bd-05fe-4b79-89b8-cc5cd1560194_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_9ce253bd-05fe-4b79-89b8-cc5cd1560194_200x200?alt=media&token=57e4c352-8236-4286-bc68-c661bd2bb983'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_3452887f-d600-4eae-983c-0461090eb391?alt=media&token=2f0a1234-628f-4700-88da-d4f42630afc6',
          id: '3452887f-d600-4eae-983c-0461090eb391',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_3452887f-d600-4eae-983c-0461090eb391',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_3452887f-d600-4eae-983c-0461090eb391_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_3452887f-d600-4eae-983c-0461090eb391_200x200?alt=media&token=ea8dfdb7-6948-425a-b5f0-2bce3a4b6281'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_5dfc1e4a-e58e-4d7f-bfde-296bbb8916dc?alt=media&token=fc759bee-6487-479f-9a83-4607d35a9551',
          id: '5dfc1e4a-e58e-4d7f-bfde-296bbb8916dc',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_5dfc1e4a-e58e-4d7f-bfde-296bbb8916dc',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_5dfc1e4a-e58e-4d7f-bfde-296bbb8916dc_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_5dfc1e4a-e58e-4d7f-bfde-296bbb8916dc_200x200?alt=media&token=f0b88696-1b6d-463e-af33-22ae6a88b130'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_19ad210e-0f47-4cd9-8e31-b2e2232c47e7?alt=media&token=6ad082d2-3f4e-41dc-99ec-bb046f045ca9',
          id: '19ad210e-0f47-4cd9-8e31-b2e2232c47e7',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_19ad210e-0f47-4cd9-8e31-b2e2232c47e7',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_19ad210e-0f47-4cd9-8e31-b2e2232c47e7_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_19ad210e-0f47-4cd9-8e31-b2e2232c47e7_200x200?alt=media&token=2cc4f050-0733-4cc7-a0b5-a19f867d76b4'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_9260dd94-cd65-490b-90b0-5d0c0b4beaf4?alt=media&token=bd052d51-6156-48ae-943f-f068b54e7864',
          id: '9260dd94-cd65-490b-90b0-5d0c0b4beaf4',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_9260dd94-cd65-490b-90b0-5d0c0b4beaf4',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_9260dd94-cd65-490b-90b0-5d0c0b4beaf4_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_9260dd94-cd65-490b-90b0-5d0c0b4beaf4_200x200?alt=media&token=9cf202f8-bd0d-494e-932a-28a92ebeb093'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_bd589c07-43a8-4205-85fc-ca80977c110b?alt=media&token=90771bac-973f-4b2b-8e37-1440b3ef0d4e',
          id: 'bd589c07-43a8-4205-85fc-ca80977c110b',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_bd589c07-43a8-4205-85fc-ca80977c110b',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_bd589c07-43a8-4205-85fc-ca80977c110b_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_bd589c07-43a8-4205-85fc-ca80977c110b_200x200?alt=media&token=1dab929b-aaf6-4ba4-b84e-ed941993f00f'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_847a3d25-4a5a-41cf-bf4c-9cdaa8739249?alt=media&token=15efec69-4d82-4c5f-a497-426a4caa05ad',
          id: '847a3d25-4a5a-41cf-bf4c-9cdaa8739249',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_847a3d25-4a5a-41cf-bf4c-9cdaa8739249',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_847a3d25-4a5a-41cf-bf4c-9cdaa8739249_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_847a3d25-4a5a-41cf-bf4c-9cdaa8739249_200x200?alt=media&token=2cab397e-ae89-4467-adc8-f6f9c019a07f'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_e910f22e-f6f2-4587-acd4-29928f89f118?alt=media&token=3efef6d3-eb7e-4b68-91eb-a25256357843',
          id: 'e910f22e-f6f2-4587-acd4-29928f89f118',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_e910f22e-f6f2-4587-acd4-29928f89f118',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_e910f22e-f6f2-4587-acd4-29928f89f118_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_e910f22e-f6f2-4587-acd4-29928f89f118_200x200?alt=media&token=e458dd5c-4ef2-4ec7-8169-cae934136f17'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_24e5e98f-fb5f-45a2-884a-fdda988ca9bc?alt=media&token=e8ba033c-e121-402a-9964-98cdc1fce0e4',
          id: '24e5e98f-fb5f-45a2-884a-fdda988ca9bc',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_24e5e98f-fb5f-45a2-884a-fdda988ca9bc',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_24e5e98f-fb5f-45a2-884a-fdda988ca9bc_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_24e5e98f-fb5f-45a2-884a-fdda988ca9bc_200x200?alt=media&token=7bee82ca-f5b4-4844-95cf-2af6c91873b4'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/za6EReBa8ackzhMdKm4OcMGyv462_711df2b3-4fd6-42b2-bc17-a2a5297041c6?alt=media&token=ffe1c9b6-a495-433e-9191-b82360695141',
          id: '711df2b3-4fd6-42b2-bc17-a2a5297041c6',
          public_url: 'gs://photobook-media/za6EReBa8ackzhMdKm4OcMGyv462_711df2b3-4fd6-42b2-bc17-a2a5297041c6',
          type: 'gallery',
          thumbnail_storage_url: 'gs://photobook-media/thumbnails/za6EReBa8ackzhMdKm4OcMGyv462_711df2b3-4fd6-42b2-bc17-a2a5297041c6_200x200',
          thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/photobook-media/o/thumbnails%2Fza6EReBa8ackzhMdKm4OcMGyv462_711df2b3-4fd6-42b2-bc17-a2a5297041c6_200x200?alt=media&token=4788e702-45ad-4e22-8816-36256d6400bf'
        }
      ]
}

export default (state = initialState, action) => {
    const { type, payload } = action;


    switch(type) {
        case IG_USER_MEDIA:
            return {
                ...state,
                media: state.media.concat(payload.userMedia.data),
                paging: payload.userMedia.paging
            }
        case IG_USER_MEDIA_ERROR:
            return {
                ...state,
                error: payload
            }
        case GALLERY_MEDIA:
            return {
                ...state,
                media: state.media.concat(payload)
            }
        case GALLERY_MEDIA_ERROR:
            return {
                ...state,
                error: payload
            }
        case SELECT_PHOTO:
            const media = state.media;
            media[payload.index] = payload.element
            return {
                ...state,
                media: media
            }
        default: return state;
    }
}