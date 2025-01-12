import Text from "@/app/_components/text";


export default function Home() {
  return (
      <div className={"max-w-2xl pt-20 pl-28"}>
          <Text type='special-huge'>Hello 👋</Text>
          <Text type='special-title' className={"mt-3"}>My name is Jinsui Chen</Text>
          <Text type='special-text' className={"mt-6"}>Born in 2002, I studied software engineering at Northeastern University (China). I was exposed to
              competitive programming during my college years and was fortunate to achieve a gold medal in one
              ACM/ICPC regional contest.</Text>
          <Text type='special-text'  className={"mt-6"}>I Joined Ant Group in May 2023 and worked there till now. Participating in the construction of the
              big data platform, the team is responsible for real-time computing and the data lake platform. I am
              more familiar with Spring & Flink.</Text>
          <Text type='special-text'  className={"mt-6"}>I Like literature. List some of my favorites: Love in the Time of Cholera, Life, and Death are
              Wearing Me Out, Don Quixote, Brothers</Text>
      </div>
  );
}
