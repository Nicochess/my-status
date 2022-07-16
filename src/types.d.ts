type Form = {
    email: string;
    password: string;
    confirm: string;
    username: string;
    file: FileList | null
};

type UserData = {
    friends: string[]
    displayName: string
    photoURL: string
    uid: string
    status: boolean
}
