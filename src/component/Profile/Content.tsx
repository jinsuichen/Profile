type props = {
    lang: 'zh-CN' | 'zh-TW' | 'en-US';
    toggleActiveIndex: () => void;
}

function Content(props: props) {
    const {toggleActiveIndex} = props;
    if (props.lang === 'zh-CN') {
        return (
            <div>
                <h1 onClick={toggleActiveIndex}>Hello 👋</h1>
                <h2>我的名字是 陈锦绥</h2>
                <p>02 年生人，就读于东北大学软件工程专业。大学期间接触到算法竞赛，有幸取得了 ACM 区预赛金牌的成绩。</p>
                <p>2023 年 5 月加入蚂蚁集团，工作至今。参与大数据平台建设，团队负责实时研发与数据湖平台。我比较熟悉
                    Spring、Flink 等技术。</p>
                <p>喜欢文学类书籍。列举一些我喜欢的书：《霍乱时期的爱情》《生死疲劳》《堂吉诃德》《兄弟》</p>
            </div>
        )
    }
    if (props.lang === 'zh-TW') {
        return (
            <div>
                <h1 onClick={toggleActiveIndex}>Hello 👋</h1>
                <h2>我的名字是 陳錦綏</h2>
                <p>02 年生人，就讀東北大學軟體工程專業。 大學期間接觸到演算法競賽，有幸取得了 ACM 區預賽金牌的成績。 </p>
                <p>2023 年 5 月加入螞蟻集團，工作至今。 參與大數據平台建設，團隊負責即時運算與資料湖平台。 我比較熟悉
                    Spring、Flink 等技術。 </p>
                <p>喜歡文學類書籍。 列舉一些我喜歡的書：《霍亂時期的愛情》《生死疲勞》《唐吉訶德》《兄弟》</p>
            </div>
        )
    }
    if (props.lang === 'en-US') {
        return (
            <div>
                <h1 onClick={toggleActiveIndex}>Hello 👋</h1>
                <h2>My name is Jinsui Chen</h2>
                <p>Born in 2002, I studied software engineering at Northeastern University (China). I was exposed to
                    competitive programming during my college years and was fortunate to achieve a gold medal in one
                    ACM/ICPC regional contest.</p>
                <p>I Joined Ant Group in May 2023 and worked there till now. Participating in the construction of the
                    big data platform, the team is responsible for real-time computing and the data lake platform. I am
                    more familiar with Spring & Flink. </p>
                <p>I Like literature. List some of my favorites: Love in the Time of Cholera, Life, and Death are
                    Wearing Me Out, Don Quixote, Brothers</p>
            </div>
        )
    }
}

export default Content;
