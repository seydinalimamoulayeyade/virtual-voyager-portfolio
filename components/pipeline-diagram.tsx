"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = ["S3", "Lambda", "Textract", "DynamoDB", "SQS / SNS"];

export function PipelineDiagram() {
  const reduce = useReducedMotion();
  return (
    <div className="pipeline" role="img" aria-label="Flux JustifAI : S3 vers Lambda, Textract, DynamoDB, puis SQS et SNS">
      <div className="pipeline-head"><span>architecture.tf</span><i>serverless / eu-west-3</i></div>
      <div className="pipeline-flow">
        {nodes.map((node, index) => (
          <div className="pipeline-step" key={node}>
            <motion.div className="pipeline-node" initial={reduce ? false : { opacity: 0, scale: .9 }} whileInView={reduce ? undefined : { opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .12, duration: .5 }}>
              <small>0{index + 1}</small><strong>{node}</strong>
            </motion.div>
            {index < nodes.length - 1 ? <motion.span className="pipeline-link" initial={reduce ? false : { scaleX: 0 }} whileInView={reduce ? undefined : { scaleX: 1 }} viewport={{ once: true }} transition={{ delay: .15 + index * .12, duration: .55 }} /> : null}
          </div>
        ))}
      </div>
      <code><span>module</span> &quot;document_pipeline&quot; &#123; <b>source</b> = &quot;./modules/pipeline&quot; &#125;</code>
    </div>
  );
}
