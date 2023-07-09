import type { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import YouTube from 'react-youtube';

const Code: CodeComponent = ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    const matchFileName = className && className.includes(':') ? className.split(':') : null;
    if (match && match.length > 0 && match[1] === 'youtube') {
        return (
            <div className='youtube-wrap'>
                <YouTube videoId={children[0] as string} />
            </div>
        );
    }
    return !inline && match ? (
        <>
            {matchFileName && <span className='file-name'>{matchFileName[1]}</span>}
            <SyntaxHighlighter
                // TODO: ここのエラーを消したい
                style={okaidia as any}
                language={match[1]}
                PreTag='div'
                {...props}
                w={100}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        </>
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
};

export default Code;
