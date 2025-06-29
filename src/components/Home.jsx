function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '80px 0 60px', 
        backgroundColor: '#0a0a0a',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#888',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '1rem'
          }}>
            TEXTBOOK LEARNING REIMAGINED
          </p>
          
          <h1 style={{ 
            fontSize: '2.8rem', 
            fontWeight: '600', 
            marginBottom: '1.5rem',
            color: '#ffffff',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Smart textbook learning<br />
            with AI explanations.
          </h1>
          
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#aaa', 
            marginBottom: '2rem', 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Highlight confusing concepts in your textbooks and get instant, contextual explanations. 
            Your AI tutor only knows what you've learned so far.
          </p>
        </div>
      </section>

      {/* Main Features with Product Demo */}
      <section style={{ padding: '40px 0 80px', backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#FFD54F',
                  borderRadius: '4px',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#000', borderRadius: '1px' }}></div>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#fff', margin: 0 }}>
                  Smart textbook parsing with structure retention
                </h3>
              </div>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '16px', marginLeft: '36px' }}>
                Upload PDF or EPUB textbooks with perfect chapter and section structure preservation. 
                Navigate cleanly through your content without messy OCR problems.
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #333'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                  Upload textbook
                </h4>
                <p style={{ fontSize: '14px', color: '#888', marginBottom: '1rem' }}>
                  Import your textbook and start learning in seconds with intelligent parsing.
                </p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '500', color: '#ccc', display: 'block', marginBottom: '0.5rem' }}>
                    Source file
                  </label>
                  <div style={{
                    padding: '12px',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #444',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#aaa'
                  }}>
                    Organic_Chemistry_Wade_8th_Edition.pdf
                  </div>
                </div>
                
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '500', color: '#ccc', display: 'block', marginBottom: '0.5rem' }}>
                    Detected structure
                  </label>
                  <div style={{
                    padding: '12px',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #444',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}>
                    <div style={{ marginBottom: '8px', color: '#ccc' }}>23 chapters detected</div>
                    <div style={{ paddingLeft: '16px', fontSize: '13px', color: '#888' }}>
                      <div>Chapter 1: Structure and Bonding</div>
                      <div>Chapter 2: Acids and Bases</div>
                      <div>Chapter 3: Introduction to Organic Reactions</div>
                      <div style={{ color: '#666' }}>+ 20 more chapters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #333',
              position: 'relative'
            }}>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#FFD54F',
                  borderRadius: '50%'
                }}></div>
                <span style={{ fontSize: '12px', color: '#888' }}>Context-aware explanations</span>
              </div>
              
              <div style={{ fontSize: '13px', fontFamily: 'Monaco, monospace', lineHeight: '1.5' }}>
                <div style={{ color: '#888', marginBottom: '4px' }}>Selected: "nucleophilic substitution mechanism"</div>
                <div style={{ color: '#888', marginBottom: '4px' }}>Location: Chapter 6, Page 245</div>
                <div style={{ color: '#FFD54F', marginBottom: '8px' }}>Knowledge scope: Chapters 1-6 only</div>
                
                <div style={{ backgroundColor: '#0a0a0a', padding: '12px', borderRadius: '6px', marginBottom: '8px' }}>
                  <div style={{ color: '#ccc', fontSize: '12px', fontWeight: '500', marginBottom: '4px' }}>Instant explanation:</div>
                  <div style={{ color: '#aaa', fontSize: '12px' }}>A nucleophile attacks the electrophilic carbon, causing the leaving group to depart...</div>
                </div>
                
                <div style={{ backgroundColor: '#0a0a0a', padding: '12px', borderRadius: '6px', marginBottom: '8px' }}>
                  <div style={{ color: '#ccc', fontSize: '12px', fontWeight: '500', marginBottom: '4px' }}>Follow-up available:</div>
                  <div style={{ color: '#aaa', fontSize: '12px' }}>• What makes a good leaving group?</div>
                  <div style={{ color: '#aaa', fontSize: '12px' }}>• Practice problems for this mechanism</div>
                </div>
                
                <div style={{ backgroundColor: '#0a0a0a', padding: '8px', borderRadius: '4px' }}>
                  <div style={{ color: '#666', fontSize: '11px' }}>Review later: Added to difficult concepts</div>
                </div>
              </div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#FFD54F',
                  borderRadius: '4px',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: '12px', height: '2px', backgroundColor: '#000' }}></div>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#fff', margin: 0 }}>
                  Highlight for instant explanations
                </h3>
              </div>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '16px', marginLeft: '36px' }}>
                Simply highlight confusing text to get instant, contextual explanations. 
                Add concepts to "review later" to track unresolved areas and build your personal study guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section - Key Features */}
      <section style={{ padding: '80px 0', backgroundColor: '#000', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Adaptive learning that grows with you.
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#aaa', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Advanced features that adapt to your learning pace and identify knowledge gaps 
              before they become roadblocks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'transparent',
                  border: '2px solid #444',
                  borderRadius: '4px',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '2px' }}></div>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#fff', margin: 0 }}>
                  Progress-limited AI tutor
                </h3>
              </div>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '15px', marginLeft: '36px', marginBottom: '2rem' }}>
                AI tutor that only knows content from your current and previous chapters. 
                No spoilers from future material—mimics natural learning progression.
              </p>

              <div style={{
                backgroundColor: '#111',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #333'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#FFD54F',
                    borderRadius: '50%'
                  }}></div>
                  <span style={{ fontSize: '14px', color: '#ccc', fontWeight: '500' }}>Current progress</span>
                </div>
                <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem' }}>Chapter 6: Alkyl Halides</h4>
                <p style={{ color: '#888', fontSize: '13px', marginBottom: '1rem' }}>AI knowledge limited to Chapters 1-6 only</p>
                
                <div style={{ 
                  backgroundColor: '#0a0a0a', 
                  padding: '1rem', 
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontFamily: 'Monaco, monospace'
                }}>
                  <div style={{ color: '#aaa', marginBottom: '4px' }}>Available context:</div>
                  <div style={{ color: '#888', marginBottom: '4px' }}>✓ Basic bonding theory</div>
                  <div style={{ color: '#888', marginBottom: '4px' }}>✓ Acid-base concepts</div>
                  <div style={{ color: '#888', marginBottom: '4px' }}>✓ Organic reaction mechanisms</div>
                  <div style={{ color: '#666' }}>✗ Advanced topics (Chapters 7+)</div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'transparent',
                  border: '2px solid #444',
                  borderRadius: '4px',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '6px', 
                    height: '6px', 
                    backgroundColor: '#FFD54F', 
                    borderRadius: '50%'
                  }}></div>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#fff', margin: 0 }}>
                  Adaptive feedback system
                </h3>
              </div>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '15px', marginLeft: '36px', marginBottom: '2rem' }}>
                Detects when you're struggling with concepts and automatically suggests 
                prerequisite refreshers or alternative explanations.
              </p>

              <div style={{
                backgroundColor: '#111',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #333',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: '#1a1a1a',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  color: '#FFD54F'
                }}>
                  Learning pattern detected
                </div>
                
                <div style={{ 
                  backgroundColor: '#0a0a0a', 
                  padding: '1rem', 
                  borderRadius: '6px',
                  fontSize: '12px',
                  marginBottom: '1rem'
                }}>
                  <div style={{ color: '#FFD54F', marginBottom: '8px', fontWeight: '500' }}>Suggestion</div>
                  <div style={{ color: '#ccc', marginBottom: '4px' }}>Looks like you're stuck on 'Stokes Theorem'</div>
                  <div style={{ color: '#aaa', marginBottom: '8px' }}>Would you like a recap of vector fields first?</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ padding: '4px 8px', backgroundColor: '#FFD54F', color: '#000', borderRadius: '4px', fontSize: '10px' }}>Yes, review basics</div>
                    <div style={{ padding: '4px 8px', backgroundColor: '#333', color: '#ccc', borderRadius: '4px', fontSize: '10px' }}>Continue anyway</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Advanced Features */}
      <section style={{ padding: '80px 0', backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                color: '#ffffff'
              }}>
                Advanced learning tools, built in
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#aaa', 
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Generate quizzes, track difficult concepts, create flashcards, and simplify 
                complex content—all powered by your highlighted text and learning progress.
              </p>

              <div style={{ borderLeft: '3px solid #FFD54F', paddingLeft: '1.5rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                    Quiz generation
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.5' }}>
                    Generate targeted quizzes from highlighted sections with personalized feedback and remediation suggestions
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                    Learning heatmap
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.5' }}>
                    Visual tracking of areas where you highlight most frequently, indicating difficulty patterns
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                    Content simplification
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.5' }}>
                    Toggle between original, simplified, and example-rich versions of complex paragraphs
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                    Misconception detection
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.5' }}>
                    AI identifies false assumptions in your questions and provides clarifying explanations
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #333',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
            }}>
              <div style={{ 
                fontSize: '13px', 
                fontFamily: 'Monaco, monospace', 
                lineHeight: '1.4',
                color: '#ccc'
              }}>
                <div style={{ color: '#888', marginBottom: '1rem' }}>
                  <span style={{ color: '#666' }}>15:07:32</span> <span style={{ color: '#FFD54F' }}>QUIZ|Generator...................Ready</span>
                </div>
                <div style={{ color: '#888', marginBottom: '1rem' }}>
                  <span style={{ color: '#666' }}>15:07:42</span> <span style={{ color: '#4CAF50' }}>INFO: Analyzing highlighted sections</span>
                </div>
                <div style={{ color: '#888', marginBottom: '1rem' }}>
                  <span style={{ color: '#666' }}>15:09:23</span> <span style={{ color: '#FFD54F' }}>HEATMAP|Analyzer...................PROCESSING</span>
                </div>
                <div style={{ color: '#888', marginBottom: '1rem' }}>
                  <span style={{ color: '#666' }}>15:09:44</span> <span style={{ color: '#4CAF50' }}>Generated 5 questions from Chapter 6 highlights</span>
                  <br />
                  <span style={{ color: '#888', marginLeft: '80px' }}>Focus: SN1 vs SN2 mechanisms</span>
                </div>
                <div style={{ color: '#888', marginBottom: '1rem' }}>
                  <span style={{ color: '#666' }}>Chapter 6 difficulty score: 73%</span>
                  <br />
                  <span style={{ color: '#888', marginLeft: '20px' }}>Most highlighted: leaving groups</span>
                </div>
                <div style={{ color: '#4CAF50', marginBottom: '1rem' }}>
                  <span style={{ color: '#666' }}>15:10:02</span> Flashcards generated ✓
                </div>
                <div style={{ color: '#888', marginBottom: '1rem' }}>
                  <span style={{ color: '#666' }}>15:10:15</span> <span style={{ color: '#FFD54F' }}>MISCONCEPTION|Detector....................ANALYZING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Features */}
      <section style={{ padding: '80px 0', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{ width: '16px', height: '2px', backgroundColor: '#FFD54F' }}></div>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                  Inline self-testing
                </h4>
              </div>
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.5' }}>
                AI-generated checkpoints appear as you read: "Based on this paragraph, what would happen if...?"
              </p>
            </div>

            <div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{ width: '12px', height: '12px', border: '2px solid #FFD54F', borderRadius: '50%' }}></div>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                  Learning checkpoints
                </h4>
              </div>
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.5' }}>
                Lock chapters after mastery and only proceed when you've demonstrated understanding
              </p>
            </div>

            <div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#FFD54F', borderRadius: '2px', marginRight: '2px' }}></div>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#FFD54F', borderRadius: '2px' }}></div>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                  Multi-style explanations
                </h4>
              </div>
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.5' }}>
                Request "Explain like I'm 5", real-world examples, or visual diagrams for any concept
              </p>
            </div>

            <div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{ width: '12px', height: '6px', backgroundColor: '#FFD54F', borderRadius: '1px' }}></div>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                  Searchable navigation
                </h4>
              </div>
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.5' }}>
                Semantic tagging of theorems, proofs, and examples with bookmarkable learning goals
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 