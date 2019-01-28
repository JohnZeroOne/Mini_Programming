def to_freud(sentence):
  #make sentence a list of words by removing spaces
  words = sentence.split()
  #change words to 'sex'
  for i in xrange(len(words)):
      words[i] = "sex"
  #return list converted to string with space
  return ' '.join(words) 
