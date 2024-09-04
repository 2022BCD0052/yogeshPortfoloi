import StarIcon from "@/assets/icons/star.svg";

const words = [
  "html",
  "css",
  "javascript",
  "react",
  "nextjs",
  "tailwindcss",
  "graphql",
  "apollo",
  "typescript",
  "nodejs",
  "mongodb",
  "aws",
  "firebase",
  "git",
  "github",
  "gitlab",
  "jira",
  "slack",
  "vscode",
  "postman",
  "docker",
  "kubernetes",
  "aws amplify",
  "aws cognito",
  "aws lambda",
  "aws s3",
  "aws dynamodb",
  "aws rds",
  "aws cloudfront",
  "aws route 53",
  "aws sagemaker",
  "aws secrets manager",
  "aws x-ray",
  "aws ec2",
  "aws ecs",
  "aws ecr",
  "aws eks",
  "aws elbv2",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-hidden">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-300 overflow-x-hidden -rotate-3 -mx-1">
        <div className="relative">
          <div className="flex animate-marquee [mask-image:linear-gradient(to_right, transparent,black_10%,black_90%,transparent)]">
            {words.concat(words).map((word, index) => (
              <div key={index} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
