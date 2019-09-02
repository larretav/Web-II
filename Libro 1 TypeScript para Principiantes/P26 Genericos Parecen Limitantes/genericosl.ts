function QuitarChar(ElString: string, ElChar: string): string {
    let ElRegex = new RegExp(ElChar, "gi");
    return ElString.replace(ElRegex,'');
}

function QuitarIt<T>(ElInput: T, ElIt: string): T {
    let ElRegex2 = new RegExp(ElIt, "gi");
    return ElInput.replace(ElRegex2, '');
}

console.log(QuitarChar("El mundo es bello", "bello"));