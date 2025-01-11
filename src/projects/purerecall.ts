import { ProjectPost } from "../types";

export const purerecall: ProjectPost = {
  id: 1,
  title: "PureRecall",
  date: new Date("2024-12-22"),
  video: "https://www.youtube.com/embed/2iLakBIAK4I?si=0E1uDcDgIPDuySiS",
  content: [
    {
      title: "Why PureRecall?",
      header: 2,
      diagram: null,
      markdown: `

PureRecall came about as a result of my frustration with the current state of how we recorded meetings.
All meetings were essentially hastily transcribed and summarized as we spoke which resulted in notes that were seldom used and basically unintelligible without proper context.
If for some reason we needed to review a meeting we would have to scroll through the meeting notes and try to find the relevant parts which was often unsuccessful.
For these reasons I was motivated to build a tool that could automatically record our meetings in a time-efficient and cost-effective manner and thus PureRecall was born.`,
    },
    {
      title: "So what is PureRecall?",
      header: 2,
      diagram: null,
      markdown: `
PureRecall is both a transcription and search tool that uses AI to enhance the virtual and in-person meeting experience.
For transcription we use online summarization to "rate" our meetings so we can check in on our current progress as it relates to our intended topic and meeting purpose.
For search we use a combination of RAG with GPT-4o and a simple fuzzy search to find the most relevant parts of transcriptions.
This allows us to quickly find the most relevant parts of a meeting and review them in a way that is easy to understand and use.`,
    },

    {
      title: "How did we build PureRecall?",
      header: 2,
      diagram: null,
      markdown: `
PureRecall was built with Next.js, Supabase, AWS Transcribe and OpenAI APIs in TypeScript and python. The project consists of two main features: transcription and search.
`,
    },
    {
      title: "Data Relationships",
      header: 3,
      diagram: `graph TD
    K[Keyword] -->|stores| C[Cluster]
    T[Transcript] -->|composed of| C
    
    subgraph Keywords
        K1[Keyword 1]
        K2[Keyword 2]
        K3[Keyword 3]
    end

    subgraph Chunks
        C1[Chunk 1]
        C2[Chunk 2]
        C3[Chunk 3]
    end

    subgraph Transcripts
        T1[Transcript 1]
        T2[Transcript 2]
    end

    K1 --> C1
    K1 --> C2
    K2 --> C2
    K2 --> C3
    K3 --> C1
    T1 --> C1
    T1 --> C2
    T2 --> C3`,
      markdown: `To understand how our features work it is important to describe the underlying data relationships and how they give rise to our features.
      I created a diagram above with a toy example on the left and the relevant relationships on the right.
      Keywords store the embedding of the keyword and the chunk ids that they are associated with. 
      Transcripts store the grade of the transcript and the chunk ids that are associated with the transcript.
      Chunks store the raw text, summary, keywords, topics and deliverables.
      With these relationships both the transcription and search features are tractable and efficient.
      `,
    },
    {
      title: "Transcription Feature",
      header: 3,
      diagram: `flowchart TD
    A[Raw Transcript] --> B[Clean Text]
    B --> C[Split into Sentences]
    C --> D[Generate Embeddings]
    D --> E[Group into Chunks]
    E --> F[Distribute Chunks]
    F --> |Chunk 1| W1[Worker 1]
    F --> |Chunk 2| W2[Worker 2]
    F --> |Chunk N| WN[Worker N]
    W1 --> |Clusters & Keywords| DB[(Database)]
    W2 --> |Clusters & Keywords| DB
    WN --> |Clusters & Keywords| DB
    W1 --> F2[Combine Results]
    W2 --> F2
    WN --> F2
    F2 --> |Transcript| DB

    subgraph Preprocessing
        B
        C
        D
    end

    subgraph Chunk Processing
        E
        F
        W1
        W2
        WN
        F2
    end`,
      markdown: `
1. User enters in meetings topics + purpose and then presses start which creates an audio worker which interfaces with the AWS Transcribe API.
2. AWS Transcribe takes in the meeting audio and returns a transcription.
3. As the transcription is being processed OpenAI is called to summarize the transcription and grade the meeting every ~15 seconds.
4. When the transcription is complete the transcription the processing pipeline is kicked off.
5. The raw transcript is sent to a supabase edge function worker which cleans the text and splits it into sentences.
6. The sentences are then embedded and grouped into chunks using a simple clustering algorithm based on cosine similarity.
7. The chunks are then concurrently distributed to other edge function workers which store the chunks in the database.
8. For each chunk the worker tries to determine keywords, topics, a 10 word summary and any deliverables as metadata.
9. The workers then combine the chunk objects and stores the final transcript in the database.
`,
    },
    {
      title: "Search Feature",
      header: 3,
      diagram: `graph TD
    Q[User Query] --> P[Parse Query]
    P --> T[Time Frame]
    P --> K[Top N Keywords]
    P --> TO[Top M Topics]
    
    K --> E[Embed Keywords/Topics]
    TO --> E
    
    E --> D[Distributed Search]
    T --> F[Filter by Time Frame]
    
    subgraph "Parallel RPC Calls"
        D --> R1[RPC 1]
        D --> R2[RPC 2]
        D --> R3[RPC 3]
    end
    
    R1 --> CS[Cosine Similarity Scoring]
    R2 --> CS
    R3 --> CS
    
    CS --> CL[Retrieve Relevant Clusters]
    CL --> F
    F --> A[Answer Generation]
    Q --> A
    A --> U[Present to User]
    CL --> U
    `,
      markdown: `
1. User enters in a query in natural language in the form of a question or keyword search. Any form is accepted.
2. The query is parsed using AI to extract the time frame, top N keywords and top M topics.
3. The keywords and topics are embedded and distributed to the workers.
4. The workers then perform a distributed RPC call to search for the most relevant chunks.
5. The chunks are then scored using cosine similarity, filtered by time frame and are used as context to answer the original question.
6. The answer and relevant chunks are then presented to the user.
      `,
    },
    {
      title: "Challenges and Tradeoffs",
      header: 2,
      diagram: null,
      markdown: ``,
    },
    {
      title: "Meeting Scale",
      header: 3,
      diagram: null,
      markdown: `I was experienced with RAG but I had never built a search system that could efficiently handle the scale of a long transcribed meeting. 
This might sound trivial but I think it's good to have a sense of the scale of the problem.
Some of our longest meetings are 6 hours long since we have the tool running in the background and we just let it run.

For a 6 hour meeting we can expect 150 WPM * 360 minutes = 54,000 words.
54,000 words * 5 characters per word = 270,000 characters.
270,000 characters / 1,048,576 characters per MB = 0.257 MB.

For the sentences embeddings we can estimate an upper bound of 54,000 / 15 words per sentence = 3,600 sentences.
3,600 sentences * 1536 dimensions = 5,529,600 dimensions.
5,529,600 dimensions * 4 bytes per float = 22,118,400 bytes = 21.6 MB.

Then for metadata (summary, topics, keywords, deliverables) we can expect around 3,600 sentences / 5 sentences per chunk = 720 chunks.
Metadata for each chunk is made up of up to 50 words so 720 chunks * 50 words = 36,000 words.
36,000 words * 5 characters per word = 180,000 characters.
180,000 characters / 1,048,576 characters per MB = 0.171 MB.

So 720 chunks * 0.171 MB = 123.12 MB of metadata.

Adding all of this up we get 0.257 MB + 21.6 MB + 123.12 MB = 145.92 MB as an upper bound for some of our longest meetings. 
Adding onto the fact that we have to do this for every meeting we have, we can expect to process around 5-6 recorded meetings per week which means over the course of a year we can expect to process around 260 meetings * 145.92 MB = 37.9392 GB of data.

We were fortunate to have abundant Supabase credits to run this so cost wasn't something we had to worry about. 

Here are some of the optimizations we could have made to reduce the cost of the embeddings:
`,
    },
    {
      title: "Space",
      header: 4,
      diagram: null,
      markdown: `
- We could have optimized our embeddings to be projected into a smaller dimension space or quantized which could have reduced the cost of the embeddings but would have had a negative impact on the search accuracy.
  - We weren't limited by the cost of the embeddings so keeping the embeddings at 1536 dimensions was the best tradeoff.
- We could have also used a token limit on the metadata summaries.
  - We chose to keep the summaries as detailed as possible for maximum clarity
- By reducing the cosine similartiy threshold for chunking we could have reduced the number of chunks that were returned by the search which reduces the amount of metadata that we have to store.
  - Again, we chose to keep the threshold high since we wanted to make sure the chunks were coherent so that we could easily look for specific parts of the meeting.
- Reducing the cosine similarity threshold on keyword extraction would have resulted in less keywords objects being stored in the database.
  - We chose to keep the threshold high since we wanted to make sure the keywords were relevant to the meeting.
`,
    },
    {
      title: "Token Cost",
      header: 4,
      diagram: null,
      markdown: `
- We could increase the minimum cosine similarity threshold for keyword search query which would have reduced the number of chunks that were returned by the search which would have reduced the number of tokens of context used for the final RAG call.
  - We decided to keep the threshold low to increase the recall of the search given that token costs are relatively cheap (GPT-4o mini is $0.00015 per 1M tokens) and we're not operating at massive scale (this is a private internal tool).
- We could have stored less keywords and topics which would have reduced the number of tokens used for the final RAG call.
  - We chose to keep the summaries as detailed as possible for maximum clarity since cost wasn't a concern because of our scale.`,
    },
    {
      title: "Transcription and Search Processing Performance Optimization",
      header: 3,
      diagram: `graph LR
    subgraph Sequential
        T1[Transcript] --> C1[Chunk 1]
        C1 --> C2[Chunk 2]
        C2 --> C3[Chunk 3]
        C3 --> C4[Chunk n]
    end

    Sequential -->|after optimization| Distributed

    subgraph Distributed
        M[Master Edge Function] --> W1[Worker 1<br/>Processing Chunk 1]
        M --> W2[Worker 2<br/>Processing Chunk 2]
        M --> W3[Worker 3<br/>Processing Chunk 3] 
        M --> W4[Worker n<br/>Processing Chunk n]
        W1 --> R[Results]
        W2 --> R
        W3 --> R
        W4 --> R
    end`,
      markdown: `
In our first tests of processing large transcripts (See the [Bee Movie Script](https://courses.cs.washington.edu/courses/cse163/20wi/files/lectures/L04/bee-movie.txt)) we found that the processing time was unreasonably slow (>30 seconds). We found that the bottleneck was the chunk processing which was being done sequentially.
Sequential processing has advanatages since we can track trends that are associated with the time trend of the meeting but for our purposes we didn't need to track this information.
Thus it made sense to parallelize and distribute the chunk data processing by creating another edge function worker that could be called by the master edge function. 

This not only sped up the processing time by 10x on some of our long test text inputs but also reduced the load on the master edge function.
This distributed framework was also applied to the search feature were we distributed the keywork cosine similarity search to multiple workers which sped up the search time by 3x.
`,
    },
    {
      title: "Search Accuracy",
      header: 3,
      diagram: `graph TD
    subgraph Transcript Processing
        T[Raw Transcript] --> C[Chunk Text]
        C --> KE[Keyword Extraction]
        C --> TE[Topic Extraction] 
        KE --> K[Keywords]
        TE --> TOP[Topics]
    end

    subgraph Search Processing
        Q[Search Query] --> QKE[Query Keyword Extraction]
        Q --> QTE[Query Topic Extraction]
        QKE --> QK[Query Keywords]
        QTE --> QT[Query Topics]
    end

    K --> CS[Cosine Similarity Comparison]
    TOP --> CS
    QK --> CS
    QT --> CS
    CS --> R[Relevant Chunks]`,
      markdown: `We observed that just comparing the raw transcript text to the search query was not enough to get good results. Thus there needed to be a way to relate the transcript text to the search query.
This was a non-trivial problem since we had to find a way that used the least amount of tokens when embedding (for cost reasons) but also had to be able to capture the most relevant information of the transcript chunk.

We found that using the single word/phrase keywords and topics as a way to relate the transcript text to the search query was the best way to do this.
This was related to the way that we were using our search. Either we were searching for proper nouns which were unique single words or phrases (NotebookLM, Hubspot, etc.) or we were searching for high level topic concepts (relevant action items, meeting minutes, sales meetings, etc.).
This allowed us to produce an abstraction layer above the raw transcript that allowed us to search for the most relevant parts of the meeting in a way that was both accurate and efficient.`,
    },
    {
      title: "Future Work",
      header: 2,
      diagram: null,
      markdown: `Open sourcing this work or making it available to the public would be a great way to get feedback and improve the product. 
      However, as of now the company that produced the tool is in a process of being shutdown so this is not currently possible.
      As a standalone marketable SaaS product it resembles the transcription tools of [Granola](https://www.granola.ai/) while incorporating the search feature of [NotebookLM](https://www.notebooklm.com/). 
      However I'm sure that this exists already in some corner of the internet.
      `,
    },
  ],
};
