import { useState, useEffect, useRef } from 'react';
import ScoreDisplay from './components/ScoreDisplay';
import ArticlePerformance from './components/ArticlePerformance';
import WordDisplay from './components/WordDisplay';
import { germanNouns, Article, ArticleStats } from './data/germanNouns';

const ArticleTrainer = () => {
    const [currentWord, setCurrentWord] = useState(germanNouns[0]);
    const [score, setScore] = useState(0);
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [articleStats, setArticleStats] = useState<
        Record<Article, ArticleStats>
    >({
        der: { correct: 0, total: 0 },
        die: { correct: 0, total: 0 },
        das: { correct: 0, total: 0 },
    });
    const nextWordButtonRef = useRef<HTMLButtonElement>(null);

    const loadNewWord = () => {
        const randomIndex = Math.floor(Math.random() * germanNouns.length);
        setCurrentWord(germanNouns[randomIndex]);
        setShowAnswer(false);
        setFeedback('');
    };

    useEffect(() => {
        loadNewWord();
    }, []);

    useEffect(() => {
        if (showAnswer && nextWordButtonRef.current) {
            nextWordButtonRef.current.focus();
        }
    }, [showAnswer]);

    const handleArticleSelection = (selectedArticle: Article) => {
        if (!currentWord || showAnswer) return;

        setTotalAttempts(totalAttempts + 1);
        setArticleStats((prev) => ({
            ...prev,
            [currentWord.article]: {
                correct:
                    prev[currentWord.article as Article].correct +
                    (selectedArticle === currentWord.article ? 1 : 0),
                total: prev[currentWord.article as Article].total + 1,
            },
        }));

        if (selectedArticle === currentWord.article) {
            setScore(score + 1);
            setStreak(streak + 1);
            setBestStreak(Math.max(bestStreak, streak + 1));
            setFeedback('Correct! ✓');
        } else {
            setStreak(0);
            setFeedback(
                `Incorrect. The correct article is "${currentWord.article}".`
            );
        }

        setShowAnswer(true);
    };

    const calculateArticleAccuracy = (article: Article): number => {
        const stats: ArticleStats = articleStats[article];
        return stats.total > 0
            ? Math.round((stats.correct / stats.total) * 100)
            : 0;
    };

    const calculateOverallAccuracy = () => {
        return totalAttempts > 0
            ? Math.round((score / totalAttempts) * 100)
            : 0;
    };

    if (!currentWord) return <div className='p-4'>Loading...</div>;

    return (
        <div className='max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md'>
            <h1 className='text-2xl font-bold text-center mb-6'>
                German Article Trainer
            </h1>
            <ScoreDisplay
                score={score}
                totalAttempts={totalAttempts}
                streak={streak}
                bestStreak={bestStreak}
                calculateOverallAccuracy={calculateOverallAccuracy}
            />
            <ArticlePerformance
                calculateArticleAccuracy={calculateArticleAccuracy}
            />
            <WordDisplay
                currentWord={currentWord}
                feedback={feedback}
                showAnswer={showAnswer}
                handleArticleSelection={handleArticleSelection}
            />
            {showAnswer && (
                <button
                    ref={nextWordButtonRef}
                    className='w-full py-2 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded focus:outline-2 focus:outline-offset-2 focus:outline-violet-500'
                    onClick={loadNewWord}
                >
                    Next Word
                </button>
            )}
        </div>
    );
};

export default ArticleTrainer;
