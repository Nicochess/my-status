type Form = {
    email: string;
    password: string;
    confirm: string;
    username: string;
    file: FileList | null
};

type UserData = {
    friends: string[]
    status: boolean
}
