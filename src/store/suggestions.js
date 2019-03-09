const links = [
    'forest',
    'love',
    'smile',
    'space',
    'night',
    'stars',
    'beach',
    'sea',
    'ocean',
    'island',
    'travel',
    'art',
    'music',
    'ship',
    'train',
    'city',
    'business',
    'success',
    'dream',
    'jungle',
    'sky',
    'romantic',
    'tree',
    'couple',
    'family',
    'wedding',
    'mountain',
    'green',
    'nature',
    'outdoors',
    'people',
    'street',
    'friends',
    'technology',
    'office',
    'work',
    'computer',
    'abstract',
    'laptop',
    'adventure'
];

export const getSuggestions = (amount) => {
    let suggestions = [];
    for(let i = 0; i < amount; i++)
        suggestions.push(links[Math.floor( Math.random()*40 )]);
    return suggestions;
}
