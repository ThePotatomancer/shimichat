// TODO: ideally have this on both server and client, or only on server
export function isUsernameValid(username: string | undefined) {
    return typeof username === "string" && username.length >= 4;
}

export async function digestPassword(password: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHexaString = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
    return hashHexaString;
}