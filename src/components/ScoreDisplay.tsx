interface ScoreDisplayProps {
    score: number;
    totalAttempts: number;
    streak: number;
    bestStreak: number;
    calculateOverallAccuracy: () => number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
    score,
    totalAttempts,
    streak,
    bestStreak,
    calculateOverallAccuracy,
}) => {
    return (
        <div className='bg-white p-4 rounded-lg shadow mb-6'>
            <div className='grid grid-cols-2 gap-2 text-sm'>
                <div>
                    Score:{' '}
                    <span className='font-bold'>
                        {score}/{totalAttempts}
                    </span>
                </div>
                <div>
                    Accuracy:{' '}
                    <span className='font-bold'>
                        {calculateOverallAccuracy()}%
                    </span>
                </div>
                <div>
                    Current Streak: <span className='font-bold'>{streak}</span>
                </div>
                <div>
                    Best Streak: <span className='font-bold'>{bestStreak}</span>
                </div>
            </div>
        </div>
    );
};

export default ScoreDisplay;
