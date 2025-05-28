import wordList from './word-list.json' assert { type: 'json' };

export type TrieNode = {
    count: number,
    children: Record<string, TrieNode | undefined>,
    isWord: boolean,
    wordIndex?: number,
}

export const wordListTrie: TrieNode = {
    count: 0,
    children: {},
    isWord: false,
};

const addWord = (word: string, index: number) => {
    let node = wordListTrie;
    node.count++;
    for (const char of word) {
        if (!node.children[char]) {
            node.children[char] = { count: 0, children: {}, isWord: false };
        }
        node = node.children[char];
        node.count++;
    }
    node.isWord = true;
    node.wordIndex = index;
};

wordList.words.forEach(addWord);


const _slice = (node: TrieNode, start: number, end: number): TrieNode => {

    if (start < 0 || end < 0) throw new Error('Invalid range');
    if (end < start) throw new Error('Invalid range');
    if (end > node.count) throw new Error('Invalid range');

    const newNode: TrieNode = {
        count: end - start,
        children: {},
        isWord: false,
    };

    if (node.isWord) {
        if (start === 0) {
            newNode.isWord = true;
        } else {
            start--;
        }
        end--;
    }

    for (const char in node.children) {
        const child = node.children[char];
        
        if (!child) continue;

        if (start < child.count) {
            newNode.children[char] = _slice(child, start, Math.min(end, child.count));
        }
        start = Math.max(0, start - child.count);
        end = end - child.count;
        if (end <= 0) {
            break;
        }
    }

    return newNode;
};

export const slice = (start: number, end: number): TrieNode => _slice(wordListTrie, start, end);


export const wordIndexOf = (word: string): number | undefined => {

    let cursor: TrieNode | undefined = wordListTrie;

    for (const char of word) {
        cursor = cursor.children[char];
        if (!cursor) {
            return undefined;
        }
    }

    if (cursor.isWord) {
        return cursor.wordIndex;
    } else {
        return undefined;
    }
};


export const wordAt = (index: number): string | undefined => {
    return wordList.words[index];
}

export const toList = (trie: TrieNode): string[] => {
    const result: string[] = [];

    const traverse = (node: TrieNode, prefix: string) => {
        if (node.isWord) {
            result.push(prefix);
        }
        for (const char in node.children) {
            const child = node.children[char];
            if (child) {
                traverse(child, prefix + char);
            }
        }
    };
    traverse(trie, '');
    return result;
};

export const startsWith = (prefix: string): TrieNode | undefined => {

    let tail: TrieNode = {
        count: 0,
        children: {},
        isWord: false,
    };

    const first = tail;

    const prefixNodes = [first];

    let cursor: TrieNode | undefined = wordListTrie;

    for (const char of prefix) {
        cursor = cursor.children[char];
        if (!cursor) {
            return undefined;
        }

        const next = {
            count: 0,
            children: {},
            isWord: false,
        };

        tail.children[char] = next;
        tail = next;
        prefixNodes.push(tail);

    }

    tail.children = cursor.children;
    tail.count = cursor.count;
    tail.isWord = cursor.isWord;

    prefixNodes.forEach(n => {
        n.count = tail.count;
    });

    return first;
};
