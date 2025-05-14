function buildSearchUrl() {
    const baseUrl = "https://overmindpesquisa.com/search";
    const param = new URLSearchParams();

    const name = document.getElementById("name").value.trim();
    const carteirinha = document.getElementById("carteirinha").value.trim();

    if (name)  param.append("name", name); 
    if (carteirinha)  param.append("carteirinha", carteirinha); 
    
    const finalUrl = param.toString() ? `${baseUrl}?${param.toString()}` : baseUrl;

    console.log(finalUrl); // teste
    window.location.href = finalUrl;
}