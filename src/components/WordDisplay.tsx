import { Article } from '../data/germanNouns';

interface WordDisplayProps {
    currentWord: {
        word: string;
        article: string;
        translation: string;
        category: string;
    };
    feedback: string;
    showAnswer: boolean;
    handleArticleSelection: (selectedArticle: Article) => void;
}

const WordDisplay: React.FC<WordDisplayProps> = ({
    currentWord,
    feedback,
    showAnswer,
    handleArticleSelection,
}) => {
    return (
        <div className='bg-white p-6 rounded-lg shadow mb-4 text-center'>
            <div className='text-lg font-bold mb-1'>{currentWord.word}</div>
            <div className='text-sm text-gray-600 mb-3'>
                ({currentWord.translation})
            </div>
            {feedback && (
                <div
                    className={`text-sm font-medium mb-3 ${
                        feedback.includes('Correct')
                            ? 'text-green-600'
                            : 'text-red-600'
                    }`}
                >
                    {feedback}
                </div>
            )}
            <div className='grid grid-cols-3 gap-2 mt-4'>
                <button
                    className={`py-2 px-4 rounded-md font-bold text-white bg-blue-500 hover:bg-blue-600 ${
                        showAnswer && currentWord.article === 'der'
                            ? 'ring-2 ring-blue-900'
                            : ''
                    }`}
                    onClick={() => handleArticleSelection('der')}
                    disabled={showAnswer}
                >
                    der
                </button>
                <button
                    className={`py-2 px-4 rounded-md font-bold text-white bg-red-500 hover:bg-red-600 ${
                        showAnswer && currentWord.article === 'die'
                            ? 'ring-2 ring-red-900'
                            : ''
                    }`}
                    onClick={() => handleArticleSelection('die')}
                    disabled={showAnswer}
                >
                    die
                </button>
                <button
                    className={`py-2 px-4 rounded-md font-bold text-white bg-green-500 hover:bg-green-600 ${
                        showAnswer && currentWord.article === 'das'
                            ? 'ring-2 ring-green-900'
                            : ''
                    }`}
                    onClick={() => handleArticleSelection('das')}
                    disabled={showAnswer}
                >
                    das
                </button>
            </div>
        </div>
    );
};

export default WordDisplay;
