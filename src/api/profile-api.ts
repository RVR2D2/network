import { instance, ResponseType } from "./api";

type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ProfileContactsType;
  photos: ProfilePhotosType;
};

type ProfileContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type ProfilePhotosType = {
  small: string | null;
  large: string | null;
};

type SavePhotoResponse = {
  photos: ProfilePhotosType;
};

export const profileApi = {
  profile(userId: number) {
    return instance
      .get<ProfileType>(`profile/${userId}`)
      .then((res) => res.data);
  },
  getStatus(userId: number) {
    return instance
      .get<string>(`profile/status/${userId}`)
      .then((res) => res.data);
  },
  updateStatus(status: string) {
    return instance
      .put<ResponseType>(`profile/status`, { status: status })
      .then((res) => res.data);
  },
  savePhoto(photoFile: string) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put<ResponseType<SavePhotoResponse>>(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
  saveProfile(profile: object) {
    return instance
      .put<ResponseType>(`profile`, profile)
      .then((res) => res.data);
  },
};
